import { Router } from "express";
import { createTutor, getTutors, getTutorById, updateTutor, deleteTutor, loginTutor } from "../controllers/tutorController.js";
import { ensureAuthenticate } from "../UTILS/authMiddleware.js";

const router = Router();


// router.use(ensureAuthenticated)


router.post("/api/tutors", createTutor);
router.get("/api/tutors", getTutors);
router.get("/api/tutors/:id", getTutorById);
router.put("/api/tutors/:id", ensureAuthenticate, updateTutor);
router.delete("/api/tutors/:id", ensureAuthenticate, deleteTutor);
router.post("/api/tutors/login", ensureAuthenticate, loginTutor);

// router.get('/status',ensureAuthenticated)


export default router;