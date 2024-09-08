
import mongoose from "mongoose";

const tutorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    },
    course: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

const tutorModel = mongoose.model('tutorModel', tutorSchema);

export default tutorModel;