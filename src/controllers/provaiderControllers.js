import Provaider from '../models/provaiderModels.js';

export const createProvaider = async (req, res) => {
    try {
        const { name, phone, email, address, status, contact, item } = req.body;
        const provaider = new Provaider({
            name,
            phone,
            email,
            address,
            status,
            contact,
            item
        });
        await provaider.save();
        res.status(200).json({
            message: "Provaider created successfully",
            provaider
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Provaider",
            error
        });
    }
}

export const getAllProvaiders = async (req, res) => {
    try {
        const provaiders = await Provaider.find();
        res.status(200).json({
            message: "Provaiders retrieved successfully",
            provaiders
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving Provaiders",
            error
        });
    }
}

export const updateProvaider = async (req, res) => {
    try {
        const { name, phone, email, address, status, contact, item } = req.body;
        const provaider = await Provaider.findByIdAndUpdate(req.params.id, { 
            name,
            phone,
            email,
            address,
            status,
            contact,
            item
        }, { new: true });
        res.status(200).json({
            message: "Provaider updated successfully",
            provaider
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating Provaider",
            error
        });
    }
}

export const deleteProvaider = async (req, res) => {
    try {
        await Provaider.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Provaider deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Provaider",
            error
        });
    }
}



