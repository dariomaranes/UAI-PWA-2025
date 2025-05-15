import mongoose, { Schema } from "mongoose";

interface User extends Schema {
  name: string;
  lastName: string;
  birthDate: Date;
  email: string;
  isAdmin: boolean;
}

const userSchema = new Schema(
    {
        _id: mongoose.Types.ObjectId,
        name: {
            type: String,
        },
        lastName: {
            type: String,
        },
        birthDate: {
            type: Date,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<User>("User", userSchema);

export default User;