import Category from "../models/categoryModels.js";

export const createCategory = async (req, res) => {
    try {
        const { name, abreviation, description } = req.body;
        const category = new Category({
            name,
            abreviation,
            description
        });
        await category.save();
        res.status(200).json({
            message: "Category created successfully",
            category
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Category",
            error
        });
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json({
            message: "Category retrieved successfully",
            category
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving Category",
            error
        });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { name, abreviation, description } = req.body;
        const category = await Category.findByIdAndUpdate(req.params.id, { 
            name,
            abreviation,
            description
        }, { new: true });
        res.status(200).json({
            message: "Category updated successfully",
            category
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating Category",
            error
        });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Category deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Category",
            error
        });
    }
}