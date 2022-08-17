import mongoose from "mongoose";

const unitMensureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    
    abreviation: {
        type: String,
        required: true,
        unique: true
    },

    status: {
        type: String,
        required: true,
    }

},
{
    timestamps: true,
    versionKey: false
}
);

export default mongoose.model("UnitMensure", unitMensureSchema);