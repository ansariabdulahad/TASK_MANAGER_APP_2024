import { model, Schema } from 'mongoose';

const CategorySchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    category: {
        type: String,
        required: true,
    }
}, { timestamps: true });

export default model('Category', CategorySchema);