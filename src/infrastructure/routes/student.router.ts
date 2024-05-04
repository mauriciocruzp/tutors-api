import express from "express";
import { studentController } from "../student.dependencies";

export const studentRouter = express.Router();

studentRouter.get('/tutors', studentController.getTutors.bind(studentController));
studentRouter.get('/students', studentController.getStudents.bind(studentController));
studentRouter.post('/subjects', studentController.createSubject.bind(studentController));
studentRouter.post('/students', studentController.createStudent.bind(studentController));
studentRouter.post('/tutors', studentController.createTutor.bind(studentController));
studentRouter.post('/tutors/:id/add-student', studentController.addStudentToTutor.bind(studentController));
studentRouter.post('/students/:id/add-subject', studentController.addSubjectToStudent.bind(studentController));
studentRouter.get('/tutors/:id/students', studentController.getStudentsFromTutor.bind(studentController));
studentRouter.get('/students/:id/subjects', studentController.getSubjectsFromStudent.bind(studentController));
