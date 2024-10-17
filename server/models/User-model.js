import { model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    isLoggedIn: { type: Boolean, default: false },
}, { timestamps: true });

// hash the password
UserSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) return next();

        // hash the password
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        next(error);
    }
});

// compare password during login
UserSchema.methods.compareUserPassword = async function (comparePassword) {
    return await bcrypt.compare(comparePassword, this.password);
}

// generate token
UserSchema.methods.generateToken = async function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                name: this.name,
                email: this.email,
                isLoggedIn: this.isLoggedIn
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: '1h' }
        )
    } catch (error) {
        console.error("Error generating token");
    }
}

export default model('User', UserSchema);