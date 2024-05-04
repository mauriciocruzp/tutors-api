import { CreateStudentUseCase } from "../../application/use-cases/create-student.use-case";
import { CreateSubjectUseCase } from "../../application/use-cases/create-subject.use-case";
import { CreateTutorUseCase } from "../../application/use-cases/create-tutor.use-case";
import { GetTutorsUseCase } from "../../application/use-cases/get-tutors.use-case";
import { GetStudentsUseCase } from "../../application/use-cases/get-students.use-case";
import { Request, Response } from "express";
import { AddStudentToTutorUseCase } from "../../application/use-cases/add-student-to-tutor.use-case";
import { AddSubjectToStudentUseCase } from "../../application/use-cases/add-subject-to-student.use-case";
import { GetStudentsFromTutorUseCase } from "../../application/use-cases/get-students-from-tutor.use-case";
import { GetSubjectsFromStudentUseCase } from "../../application/use-cases/get-subjects-from-student.use-case";

export class StudentController {
    constructor(readonly getStudentsFromTutorUseCase: GetStudentsFromTutorUseCase, readonly getSubjectsFromStudentUseCase: GetSubjectsFromStudentUseCase, readonly addStudentToTutorUseCase: AddStudentToTutorUseCase, readonly addSubjectToStudentUseCase: AddSubjectToStudentUseCase, readonly createSubjectUseCase: CreateSubjectUseCase, readonly createStudentUseCase: CreateStudentUseCase, readonly createTutorUseCase: CreateTutorUseCase, readonly getTutorsUseCase: GetTutorsUseCase, readonly getStudentsUseCase: GetStudentsUseCase) { }

    async getStudentsFromTutor(req: Request, res: Response) {
        const tutorId = req.params.id;
        const students = await this.getStudentsFromTutorUseCase.execute(tutorId);

        if (!students) {
            return res.status(404).json({ message: "Students not found" });
        }
        return res.status(200).json({ students });
    }

    async getSubjectsFromStudent(req: Request, res: Response) {
        const studentId = req.params.id;
        const subjects = await this.getSubjectsFromStudentUseCase.execute(studentId);

        if (!subjects) {
            return res.status(404).json({ message: "Subjects not found" });
        }
        return res.status(200).json({ subjects });
    }

    async addStudentToTutor(req: Request, res: Response) {
        const tutorId = req.params.id;
        const { studentId } = req.body;
        const student = await this.addStudentToTutorUseCase.execute(studentId, tutorId);

        if (!student) {
            return res.status(400).json({ message: "Failed to add student to tutor" });
        }
        return res.status(201).json({ message: "Student added to tutor successfully!", student });
    }

    async addSubjectToStudent(req: Request, res: Response) {
        const studentId = req.params.id;
        const { subjectId } = req.body;
        const subjectStudent = await this.addSubjectToStudentUseCase.execute(studentId, subjectId);

        if (!subjectStudent) {
            return res.status(400).json({ message: "Failed to add subject to student" });
        }
        return res.status(201).json({ message: "Subject added to student successfully!", subjectStudent });
    }

    async getStudents(req: Request, res: Response) {
        const students = await this.getStudentsUseCase.execute();

        if (!students) {
            return res.status(404).json({ message: "Students not found" });
        }
        return res.status(200).json({ students });
    }

    async getTutors(req: Request, res: Response) {
        const tutors = await this.getTutorsUseCase.execute();

        if (!tutors) {
            return res.status(404).json({ message: "Tutors not found" });
        }
        return res.status(200).json({ tutors });
    }

    async createStudent(req: Request, res: Response) {
        const { firstName, lastName } = req.body;
        const student = await this.createStudentUseCase.execute(firstName, lastName);

        if (!student) {
            return res.status(400).json({ message: "Failed to create student" });
        }
        return res.status(201).json({ message: "Student created successfully!", student });
    }

    async createTutor(req: Request, res: Response) {
        const { firstName, lastName } = req.body;
        const tutor = await this.createTutorUseCase.execute(firstName, lastName);

        if (!tutor) {
            return res.status(400).json({ message: "Failed to create tutor" });
        }
        return res.status(201).json({ message: "Tutor created successfully!", tutor });
    }

    async createSubject(req: Request, res: Response) {
        const { name } = req.body;
        const subject = await this.createSubjectUseCase.execute(name);

        if (!subject) {
            return res.status(400).json({ message: "Failed to create subject" });
        }
        return res.status(201).json({ message: "Subject created successfully!", subject });
    }
}
