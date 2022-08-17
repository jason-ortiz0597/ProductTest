import Product from "../models/productModels.js";

export const createProduct = async (req, res) => {
    try {
        const { name, description, price, dateOfExpiration, category, unit, provaider, statu } = req.body;
        const product = new Product({
            name,
            description,
            price,
            dateOfExpiration,
            category,
            unit,
            provaider,
            statu
        });
        await product.save();
        res.status(200).json({
            message: "Product created successfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Product",
            error
        });
    }
}

//get all products populated
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find()
        res.status(200).json({
            message: "Products retrieved successfully",
            products
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving Products",
            error
        });
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, dateOfExpiration, category, unit, provaider, statu } = req.body;
        const product = await Product.findByIdAndUpdate(req.params.id, {
            name,
            description,
            price,
            dateOfExpiration,
            category,
            unit,
            provaider,
            statu
        }, { new: true });
        res.status(200).json({
            message: "Product updated successfully",
            product
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating Product",
            error
        });
    }
}

export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Product",
            error
        });
    }
}

