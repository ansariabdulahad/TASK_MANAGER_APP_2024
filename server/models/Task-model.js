import { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    // categoryId: {
    //     type: Schema.ObjectId,
    //     ref: 'Category',
    //     required: true
    // },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: "pending",
    },
    dueDate: {
        type: Date,
    },
    category: { type: String },
}, { timestamps: true });

export default model('Task', TaskSchema);