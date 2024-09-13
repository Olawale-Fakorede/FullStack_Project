import { Router } from "express";
import { createSuperAdmin, getSuperAdmins, getSuperAdminById, updateSuperAdmin, deleteSuperAdmin } from '../controllers/superAdminController.js';
import { ensureAuthenticate } from '../UTILS/authMiddleware.js';

const router = Router();

router.post('/api/admin', createSuperAdmin);
router.get('/api/admin', getSuperAdmins);
router.get('/api/admin:id', getSuperAdminById);
router.put('/api/admin:id', ensureAuthenticate, updateSuperAdmin);
router.delete('/api/admin:id', ensureAuthenticate, deleteSuperAdmin);

export default router;
