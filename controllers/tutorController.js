// import tutorModel from "../Models/tutorModels";

// export const createTutor = async (req, res) => {
//     const { name, email, password, course, phone, SuperAdmin } = req.body;
//     const newTutor = new tutorModel({ name, email, password, course, phone, SuperAdmin });
    
//     try {
//         // const {body} = req
//         await newTutor.save();
//         return res.status(201).json(newTutor);
//     } 
//     catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
// };

// export const getTutors = async (req, res) => {
//     try {
//         const tutors = await tutorModel.find();
//         return res.status(200).json(tutors);
//     } 
//     catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };

// export const getTutorById = async (req, res) => {
//     try {
//         const tutor = await tutorModel.findById(req.params.id);
//         if (!tutor) return res.status(404).json({ message: "Tutor not found" });
//         return res.status(200).json(tutor);
//     } 
//     catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };

// export const updateTutor = async (req, res) => {
//     const {id} = req.params
//     try {
//         const updatedTutor = await tutorModel.findByIdAndUpdate(id, req.body, { new: true });
//         if (!updatedTutor) return res.status(404).json({ message: "Tutor not found" });
//         return res.status(200).json(updatedTutor);
//     } 
//     catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
// };

// export const deleteTutor = async (req, res) => {
//     const {id} = req.params
//     try {
//         const deletedTutor = await tutorModel.findByIdAndDelete(id);
//         if (!deletedTutor) return res.status(404).json({ message: "Tutor not found" });
//         return res.status(200).json(deletedTutor);
//     } 
//     catch (error) {
//         return res.status(500).json({ message: error.message });
//     }
// };



import tutorModel from "../Models/tutorModels.js";
import bcrypt from "bcryptjs";

export const createTutor = async (req, res) => {
  try {
    const { name, email, password, course, phone, SuperAdmin } = req.body;
    const newTutor = new tutorModel({ name, email, password, course, phone, SuperAdmin });
    await newTutor.save();
    return res.status(200).json({message: "Tutor created successfully", user: newTutor});
  } 
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTutors = async (req, res) => {
  try {
    const newTutor = await tutorModel.find().exec(); // Added exec() to execute the query
    
    if (newTutor.length === 0) {
    return res.status(200).json({"message": "Tutor information"});
  } 
  return res.status(200).json(newTutor);
}
catch (error) {
    return res.status(500).json({ "error": error.message });
  }
};

export const getTutorById = async (req, res) => {
  try {
    const newTutor = await tutorModel.findById(req.params.id).exec(); // Added exec() to execute the query
    if (!newTutor){ 
      return res.status(404).json({ message: "Tutor not found" });
    }
    return res.status(200).json(newTutor);
  } 
  catch (error) {
    return res.status(500).json({ "error": error.message });
  }
};

export const updateTutor = async (req, res) => {
  
  try {
    const { id } = req.params;
    const updatedTutor = req.body
    const Tutor = await tutorModel.findByIdAndUpdate(id, updatedTutor, { new: true });
    if (!Tutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    return res.status(200).json(Tutor);
  } 
  catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteTutor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTutor = await tutorModel.findByIdAndDelete(id);
    if (!deletedTutor) {
      return res.status(404).json({ message: "Tutor not found" });
    }
    return res.status(200).json({message: "Tutor deleted"});
  } 
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


// export const loginTutor = (req, res) => {
//   const {email, password} = req.body
//   const tutor = await tutorModel.findOne({email});
//   if (!tutor) {
//       return res.status(404).json({message: 'Please enter your correct details.'})
//   }

// const passwordCompare = await bcrypt.compare(password, Tutor.password);
// console.log(passwordCompare);

// }
export const loginTutor = async (req, res) => {
  const {email, password} = req.body
  const tutor = await tutorModel.findOne({email})
  if(!tutor){
      return res.status(404).json({msg: "tutor not found"})
  }

  const passwordCompare = await bcrypt.compare(password, tutor.password)
  console.log(passwordCompare)
  if (!passwordCompare) {
      return res.status(401).json({msg: "invalid credentials"})
  }
  return res.status(200).json({msg: "Login successful", tutor})
}