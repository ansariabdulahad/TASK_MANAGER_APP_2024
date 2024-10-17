import { model, Schema } from 'mongoose';

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        default: "pending",
    },
    dueDate: {
        type: Date,
    },
    category: { type: String },
}, { timestamps: true });

export default model('Task', TaskSchema);