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
import { GetStudentByIdUseCase } from "../../application/use-cases/get-student-by-id.use-case";
import { GetTutorByIdUseCase } from "../../application/use-cases/get-tutor-by-id.use-case";

export class Controller {
    constructor(readonly getTutorByIdUseCase: GetTutorByIdUseCase, readonly getStudentByIdUseCase: GetStudentByIdUseCase, readonly getStudentsFromTutorUseCase: GetStudentsFromTutorUseCase, readonly getSubjectsFromStudentUseCase: GetSubjectsFromStudentUseCase, readonly addStudentToTutorUseCase: AddStudentToTutorUseCase, readonly addSubjectToStudentUseCase: AddSubjectToStudentUseCase, readonly createSubjectUseCase: CreateSubjectUseCase, readonly createStudentUseCase: CreateStudentUseCase, readonly createTutorUseCase: CreateTutorUseCase, readonly getTutorsUseCase: GetTutorsUseCase, readonly getStudentsUseCase: GetStudentsUseCase) { }

    async getTutors(req: Request, res: Response) {
        const tutors = await this.getTutorsUseCase.execute();

        if (!tutors) {
            return res.status(404).json({ message: "Tutors not found" });
        }
        return res.status(200).json({ tutors });
    }

    async getStudents(req: Request, res: Response) {
        const students = await this.getStudentsUseCase.execute();

        if (!students) {
            return res.status(404).json({ message: "Students not found" });
        }
        return res.status(200).json({ students });
    }

    async getStudentsFromTutor(req: Request, res: Response) {
        const tutorId = req.params.id;
        const students = await this.getStudentsFromTutorUseCase.execute(tutorId);

        if (!students) {
            return res.status(404).json({ message: "Students not found" });
        }

        const tutor = await this.getTutorByIdUseCase.execute(tutorId);

        if (!tutor) {
            return res.status(404).json({ message: "Tutor not found" });
        }

        return res.status(200).json({ tutor, students });
    }

    async getSubjectsFromStudent(req: Request, res: Response) {
        const studentId = req.params.id;
        const subjects = await this.getSubjectsFromStudentUseCase.execute(studentId);

        if (!subjects) {
            return res.status(404).json({ message: "Subjects not found" });
        }

        const student = await this.getStudentByIdUseCase.execute(studentId);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.status(200).json({ student, subjects });
    }

    async createSubject(req: Request, res: Response) {
        const { name } = req.body;
        const subject = await this.createSubjectUseCase.execute(name);

        if (!subject) {
            return res.status(400).json({ message: "Failed to create subject" });
        }
        return res.status(201).json({ subject });
    }

    async createStudent(req: Request, res: Response) {
        const { firstName, lastName } = req.body;
        const student = await this.createStudentUseCase.execute(firstName, lastName);

        if (!student) {
            return res.status(400).json({ message: "Failed to create student" });
        }
        return res.status(201).json({ student });
    }

    async createTutor(req: Request, res: Response) {
        const { firstName, lastName } = req.body;
        const tutor = await this.createTutorUseCase.execute(firstName, lastName);

        if (!tutor) {
            return res.status(400).json({ message: "Failed to create tutor" });
        }
        return res.status(201).json({ tutor });
    }

    async addStudentToTutor(req: Request, res: Response) {
        const tutorId = req.params.tutor_id;
        const studentId = req.params.student_id;
        const student = await this.addStudentToTutorUseCase.execute(studentId, tutorId);

        if (!student) {
            return res.status(400).json({ message: "Failed to add student to tutor" });
        }

        const tutor = await this.getTutorByIdUseCase.execute(tutorId);

        if (!tutor) {
            return res.status(404).json({ message: "Tutor not found" });
        }

        return res.status(201).json({ tutor, student });
    }

    async addSubjectToStudent(req: Request, res: Response) {
        const studentId = req.params.student_id;
        const subjectId = req.params.subject_id;
        const subjects = await this.addSubjectToStudentUseCase.execute(studentId, subjectId);

        if (!subjects) {
            return res.status(400).json({ message: "Failed to add subject to student" });
        }

        const student = await this.getStudentByIdUseCase.execute(studentId);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.status(201).json({ student, subjects });
    }
}
