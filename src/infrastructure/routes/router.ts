import express from "express";
import { controller } from "../dependencies";

export const router = express.Router();

router.get('/tutors', controller.getTutors.bind(controller));
router.get('/tutors/:id/students', controller.getStudentsFromTutor.bind(controller));
router.get('/students', controller.getStudents.bind(controller));
router.get('/students/:id/subjects', controller.getSubjectsFromStudent.bind(controller));
router.post('/students', controller.createStudent.bind(controller));
router.post('/tutors', controller.createTutor.bind(controller));
router.post('/subjects', controller.createSubject.bind(controller));
router.post('/tutors/:tutor_id/students/:student_id/assing', controller.addStudentToTutor.bind(controller));
router.post('/students/:student_id/subjects/:subject_id/assing', controller.addSubjectToStudent.bind(controller));
