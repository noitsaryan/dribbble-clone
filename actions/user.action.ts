"use server"
import { User } from "@/models/user.model";
import { connectDB } from "@/utils/database";
import bcrypt from 'bcrypt'
import UIDGenerator from "uid-generator"
import { cookies } from 'next/headers'
import { decode, sign } from 'jsonwebtoken'
import { generateFromEmail } from "unique-username-generator";

function isValidEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
}


export async function createUser({ name, username, email, password }: { name: string, username: string, email: string, password: string }) {
    try {
        await connectDB();

        if (!name || !email || !password || !username) return { message: 'Fill all the details.', success: false };

        const hashedPassword = await bcrypt.hash(password, 10);

        const generate = new UIDGenerator(512, UIDGenerator.BASE62);
        const verifyToken = await generate.generate()
        const resetToken = await generate.generate()

        const user = {
            name, email, authentication: {
                password: hashedPassword,
                verifyToken, resetToken
            }, username
        }

        const response = await User.create(user);

        if (!response) return { message: 'An error occurred!', success: false }

        return { message: 'Successfully registered.', success: true }

    } catch (error: any) {
        if (error.code === 11000) return { message: 'Email or UserName already exists.', success: false }
        return error.message;
    }
}

export const login = async (identity: string, password: string) => {
    try {
        await connectDB()
        const isEmail = isValidEmail(identity);
        let user;
        const cookie = cookies();

        // Validating email or username
        isEmail ?
            user = await User.findOne({ email: identity }).select('authentication username email name').exec() :
            user = await User.findOne({ username: identity }).select('authentication username email name').exec()

        if (!user) return { message: "Email does not exists", success: false }

        const checkPassword = await bcrypt.compare(password, user.authentication.password)

        if (!checkPassword) return { message: 'Password not matched', success: false }

        const generate = new UIDGenerator(512, UIDGenerator.BASE62);
        const verifyToken = await generate.generate()

        const updatedValue = await User.updateOne({ email: user.email }, { $set: { 'authentication.verifyToken': verifyToken } })

        if (updatedValue.acknowledged) {
            console.log('Token updated')
        }



        const userObject = {
            username: user.username,
            email: user.email,
            name: user.name
        }

        const JWT = sign(userObject, process.env.JWT_KEY!)

        // Cookies
        checkPassword && cookie.set('dribbble-auth', user.authentication.verifyToken, {
            maxAge: 24 * 60 * 60
        }) && cookie.set('dribbble-session', JWT, {
            maxAge: 24 * 60 * 60
        })

        return { message: 'Success login', success: true };
    } catch (error: any) {
        return error.message;
    }
}

export const signOut = async () => {
    try {
        const cookie = cookies();
        cookie.delete("dribbble-auth")
        cookie.delete("dribbble-session")
        return { message: 'Logged out', success: true }
    } catch (error: any) {
        return error.message
    }
}

export const session = async () => {
    try {
        const cookie = cookies();
        if (cookie.has("dribbble-auth") && cookie.has("dribbble-session")) {
            return { session: true }
        }
        return { session: false }
    } catch (error: any) {
        return error.message;
    }
}

export const getUserData = async () => {
    const cookie = cookies();
    const user = cookie.get("dribbble-session")?.value;
    if (!user) return { message: 'Data not found.', success: false };
    const jwt = decode(user);
    return jwt;
}