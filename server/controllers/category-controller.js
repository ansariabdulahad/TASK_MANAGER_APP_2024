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

        const isCategoryExist = await Category.findOne({ userId, category });

        if (isCategoryExist) return res.status(403).json({
            success: false,
            message: "Category already exists"
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
        const { userId } = req.user;

        const Categories = await Category.find({ userId });
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
        const { userId } = req.user;

        const updatedCategory = await Category.findOneAndUpdate({ _id: id, userId }, data, { new: true });

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
        const { userId } = req.user;

        const deletedCategory = await Category.findOneAndDelete({ _id: id, userId });

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