import { Router } from 'express';
import { createAttendance, getAttendance, updateAttendance } from '../controllers/attendanceController.js';

const router = Router();

router.post('/api/attendance', createAttendance);
router.get('/api/attendance', getAttendance);
router.put('/api/attendance/:id', updateAttendance);


export default router;