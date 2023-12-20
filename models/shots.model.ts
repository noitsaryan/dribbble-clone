import { User } from './user.model';
import mongoose, { Schema, model, models } from 'mongoose';

const ShotSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    image: {
        type: String, required: true
    },
    heading: String,
    links: [
        {
            icon: String,
            link: String
        }
    ],
    description: String
})

export const Shot = models.Shot || model("Shot", ShotSchema)