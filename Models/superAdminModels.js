import mongoose from "mongoose";

const superAdminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        
    },
    role: {
        type: String,
        enum: ["superAdmin", "admin", "user"],
        default: "user"
    }
}, {timestamps : true});

const superAdminModel = mongoose.model('superAdminModel', superAdminSchema);

export default superAdminModel;

