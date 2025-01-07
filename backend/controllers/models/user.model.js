import mongoose from "mongoose";
    const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, "Please provide a username"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Please add a password"],
        minlength: 6,
    },
    name: {
        type: String,
        require: true,
    },
    lastLogin: {
        type:Date,
        default: Date.now,
    },
    isVeryfied: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, 
{timestamps: true});
export const User = mongoose.model("User", userSchema);
 