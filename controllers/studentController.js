import studentModel from "../Models/studentModels.js";


export  const createStudent = async (req, res) =>{
    const { name, studentNumber, course, cohort, Tutor } = req.body
    
    try{
        const newStudent = new studentModel(
            name,
            studentNumber,
            course,
            cohort,
            Tutor
        );
        await newStudent.save();
       return res.status(201).json({
        message: "Student created successfully"
        })
    }
    catch (error){
        return res.status(500).json({
            'error': error.message
        })
    }
};

export const getStudent = async (req, res) =>{
    try{
        const student = await studentModel.find().populate('Tutor');
        if(!student.lenght === 0){
            return res.status(404).json({message: "Student not found"})
        } 
        return res.status(200).json(student)
    }
    catch (error){
        return res.status(500).json({
            'error': error.message
        })
    }
};

export const getStudentId = async (req, res) => {
        const { id } = req.params
    try{
        const student = await studentModel.findById(id).populate('Tutor');
        if(!student){
            return res.status(404).json({message: "Student not found"})
        }
        return res.status(200).json(student)
    }
    catch (error){
        return res.status(500).json({
            'error': error.message
        })
    }
};

export const updateStudent = async (req, res) => {
    try{
        const { id } = req.params;
        const { name, studentNumber, course, cohort, Tutor } = req.body
        // const updateStudent = req.body
        const student = await studentModel.findByIdAndUpdate(id, { name, studentNumber, course, cohort, Tutor }, {new: true});
        if(!student){
            return res.status(404).json({message: "Student not found"})
        }
        return res.status(200).json(student)
    }
    catch (error){
        return res.status(500).json({
            'error': error.message
        })
    }
}