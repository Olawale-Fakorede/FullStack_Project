import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    studentNumber: {
        type: Number,
        required: true,
        min: 4,
        max: 10
    },
    course: {
        type: String,
        required: true
    },
    cohort: {
        type: String,
        required: true,
        enum: ['1', '2', '3', '4', '5']
    },
    Tutor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor'
    }
}, {timestamps : true});

const studentModel = mongoose.model('studentModel', studentSchema);

export default studentModel;

