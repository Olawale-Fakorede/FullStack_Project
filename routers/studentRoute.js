import { Router } from 'express';
import { createStudent, getStudent, getStudentId, updateStudent } from '../controllers/studentController.js';


const router = Router();



router.post('/api/students', createStudent);
router.get('/api/students', getStudent);
router.get('/api/students/:id', getStudentId);
router.put('/api/students/:id', updateStudent);


export default router;