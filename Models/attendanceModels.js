
import mongoose from "mongoose";

const attendanceSchema = mongoose.Schema({
    status:{
        type: String,
        enum: ['Present', 'Absent', 'Left']
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        date: { type: Date, default: Date.now },
        required: true
    }
}, {timestamps : true});

const attendanceModel = mongoose.model('attendanceModel', attendanceSchema);

export default attendanceModel;