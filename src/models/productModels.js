import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dateOfExpiration: {
        type: Date,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UnitMensure",
        required: true
    },
    provaider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Provaider",
        required: true
    },
    statu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Statu",
        required: true
    }
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Product", productSchema);