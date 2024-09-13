import superAdminModel from "../Models/superAdminModels.js";

export const createSuperAdmin = async (req, res) => {
  try {
    const newSuperAdmin = new superAdminModel(req.body);
    await newSuperAdmin.save();
    res.status(201).json(newSuperAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSuperAdmins = async (req, res) => {
  try {
    const superAdmins = await superAdminModel.find();
    res.status(200).json(superAdmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
}
};

export const getSuperAdminById = async (req, res) => {
try {
  const superAdmin = await superAdminModel.findById(req.params.id);
  if (!superAdmin) {
    return res.status(404).json({ message: 'Super Admin not found' });
  }
  res.status(200).json(superAdmin);
} catch (error) {
  res.status(500).json({ message: error.message });
}
};

export const updateSuperAdmin = async (req, res) => {
    try {
      const updatedSuperAdmin = await superAdminModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedSuperAdmin) {
        return res.status(404).json({ message: 'Super Admin not found' });
      }
      res.status(200).json(updatedSuperAdmin);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  export const deleteSuperAdmin = async (req, res) => {
    try {
      const deletedSuperAdmin = await superAdminModel.findByIdAndDelete(
        req.params.id
      );
      if (!deletedSuperAdmin) {
        return res.status(404).json({ message: 'Super Admin not found' });
      }
      res.status(200).json(deletedSuperAdmin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  