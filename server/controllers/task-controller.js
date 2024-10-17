import Task from '../models/Task-model.js';

// create a new Task
export const createTask = async (req, res) => {
    try {
        const { title, description, status, dueDate, category } = req.body;
        const { userId } = req.user;

        const newTask = new Task({
            userId,
            title, description, status, dueDate, category
        });
        await newTask.save();

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in createTask",
            error: error
        });
    }
}

// get all tasks
export const getAllTasks = async (req, res) => {
    try {
        const { userId } = req.user;
        const tasks = await Task.find({ userId });
        res.status(200).json({
            success: true,
            message: "Task fetched successfully",
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in createTask",
            error: error
        });
    }
}

// edit a task
export const editTask = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;
        const { userId } = req.user;

        const updatedTask = await Task.updateOne({ _id: id, userId }, data, { new: true });

        if (updatedTask.modifiedCount === 0) return res.status(404).json({
            success: false,
            message: "Task not found or not updated",
        });

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: await Task.findById(id)
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in createTask",
            error: error
        });
    }
}

// delete a task
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.user;

        const deletedTask = await Task.findOneAndDelete({
            _id: id,
            userId
        });

        if (!deletedTask) return res.status(404).json({
            success: false,
            message: "Task not found",
        });

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            data: deletedTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in createTask",
            error: error
        });
    }
}