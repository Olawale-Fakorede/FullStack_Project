import attendanceModel from "../Models/attendanceModels.js";

export const createAttendance = async (req, res) => {
    try{
        const { status, studentId} = req.body
        const newAttendance = new attendanceModel({ status, studentId });
        await newAttendance.save();
        return res.status(200).json(newAttendance)
    }
    catch(error){
        return res.status(500).json({'error': error.message})
    }
}


export const getAttendance = async (req, res) =>{
    try{
        const attendance = await attendanceModel.find().populate('studentId');
        if(attendance.lenght === 0){
            return res.status(200).json({
                message: 'No attendances found'
            });
        }
        return res.status(200).json(attendance)
    }
    catch(error){
        return res.status(500).json({'error': error.message})
    }
};


export const updateAttendance = async (req, res) => {
    try{
        const { id } = req.params
        const { status } = req.body;
        const attendance = await attendanceModel.findByIdAndUpdate(id, { status }, { new: true });
        if(!attendance){
            return res.status(404).json({ message: 'Attendance not found' });
        }
        return res.status(200).json(attendance);
    }
    catch(error){
        return res.status(500).json({'error': error.message})
    }
};


// export const deleteAttendance = async (req, res) => {
//     try{
//         const { id } = req.params;
//         const attendance = await attendanceModel.findByIdAndRemove(id);
//         if(!attendance){
//             return res.status(404).json({ message: 'Attendance not found' });
//         }
//         return res.status(200).json({msg: "Student"});
//     }
//     catch(error){
//         return res.status(500).json({'error': error.message})
//     }
// }