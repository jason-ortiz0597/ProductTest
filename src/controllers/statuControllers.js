import Statu from "../models/estatuModels.js";

export const createStatu = async (req, res) => {
    try {
        const { name, abreviation, description } = req.body;
        const statu = new Statu({
            name,
            abreviation,
            description
        });
        await statu.save();
        res.status(200).json({
            message: "Statu created successfully",
            statu
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating Statu",
            error
        });
    }
}

export const getAllStatu = async (req, res) => {
    try {
        const statu = await Statu.find();
        res.status(200).json({
            message: "Statu retrieved successfully",
            statu
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving Statu",
            error
        });
    }
}

export const updateStatu = async (req, res) => {
    try {
        const { name, abreviation, description } = req.body;
        const statu = await Statu.findByIdAndUpdate(req.params.id, { 
            name,
            abreviation,
            description
        }, { new: true });
        res.status(200).json({
            message: "Statu updated successfully",
            statu
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating Statu",
            error
        });
    }
}

export const deleteStatu = async (req, res) => {
    try {
        await Statu.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Statu deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Statu",
            error
        });
    }
}

