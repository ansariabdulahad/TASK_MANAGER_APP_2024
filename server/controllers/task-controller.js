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
        const tasks = await Task.find();
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

        const updatedTask = await Task.findByIdAndUpdate(id, data, { new: true });

        if (!updatedTask) return res.status(404).json({
            success: false,
            message: "Task not found",
        });

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: updatedTask
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

        const deletedTask = await Task.findByIdAndDelete(id);

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