import mongoose from "mongoose";

const statuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    abreviation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Statu", statuSchema);