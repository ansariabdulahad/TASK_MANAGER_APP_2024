import Category from '../models/Category-model.js';

// create a new Task
export const createCategory = async (req, res) => {
    try {
        const { category } = req.body;
        const { userId } = req.user;

        const newCategory = new Category({
            userId,
            category
        });
        await newCategory.save();
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: newCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in createCategory",
            error: error
        });
    }
}

// get all tasks
export const getAllCategory = async (req, res) => {
    try {
        const Categories = await Category.find();
        res.status(200).json({
            success: true,
            message: "categories fetched successfully",
            data: Categories
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in getAllCategory",
            error: error
        });
    }
}

// edit a task
export const editCategory = async (req, res) => {
    try {
        const data = req.body;
        const { id } = req.params;

        const updatedCategory = await Category.findByIdAndUpdate(id, data, { new: true });

        if (!updatedCategory) return res.status(404).json({
            success: false,
            message: "Category not found",
        });

        res.status(200).json({
            success: true,
            message: "category updated successfully",
            data: updatedCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in updateCategory",
            error: error
        });
    }
}

// delete a task
export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) return res.status(404).json({
            success: false,
            message: "Category not found",
        });

        res.status(200).json({
            success: true,
            message: "Category deleted successfully",
            data: deletedCategory
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error occurred in deleteCategory",
            error: error
        });
    }
}