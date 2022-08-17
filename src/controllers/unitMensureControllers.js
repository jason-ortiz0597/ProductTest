import UnitMensure from "../models/unitMensureModels.js";


export const createUnitMensure = async (req, res) => {
    try {
        const { name, abreviation, status } = req.body;
        const unitMensure = new UnitMensure({
            name,
            abreviation,
            status
        });
        await unitMensure.save();
        res.status(200).json({
            message: "UnitMensure created successfully",
            unitMensure
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating UnitMensure",
            error
        });
    }
}

export const getAllUnitMensures = async (req, res) => {
    try {
        const unitMensures = await UnitMensure.find();
        res.status(200).json({
            message: "UnitMensures retrieved successfully",
            unitMensures
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving UnitMensures",
            error
        });
    }
}

export const updateUnitMensure = async (req, res) => {
    try {
        const { name, abreviation, status } = req.body;
        const unitMensure = await UnitMensure.findByIdAndUpdate(req.params.id, { 
            name,
            abreviation,
            status
        }, { new: true });
        res.status(200).json({
            message: "UnitMensure updated successfully",
            unitMensure
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating UnitMensure",
            error
        });
    }
}

export const deleteUnitMensure = async (req, res) => {
    try {
        await UnitMensure.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "UnitMensure deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting UnitMensure",
            error
        });
    }
}