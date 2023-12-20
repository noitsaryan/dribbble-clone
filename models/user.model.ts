import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true, lowercase: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    authentication: {
        password: { type: String, required: true, select: false },
        verifyToken: { type: String, required: true, select: false },
        resetToken: { type: String, required: true, select: false }
    }
})

export const User = models.User || model("User", UserSchema)