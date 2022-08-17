import mongoose from "mongoose";

const  provaidersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
    },

    address: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true,
    },

    contact : {
        type: String,
        required: true
    },

    item : {
        type: String,
    },

    

},
{
    timestamps: true,
    versionKey: false
});

export default mongoose.model("Provaiders", provaidersSchema);
