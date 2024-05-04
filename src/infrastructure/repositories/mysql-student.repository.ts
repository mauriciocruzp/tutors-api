import TutorModel from "../../database/mysql/models/tutor.model";
import StudentModel from "../../database/mysql/models/student.model";
import SubjectModel from "../../database/mysql/models/subject.model";
import { StudentEntity } from "../../domain/entities/student.entity";
import { SubjectEntity } from "../../domain/entities/subject.entity";
import { TutorEntity } from "../../domain/entities/tutor.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";
import { v4 as uuidv4 } from "uuid";
import signale from "signale";
import SubjectStudentModel from "../../database/mysql/models/subject-student.model";
import { SubjectStudentEntity } from "../../domain/entities/subject-student.model";

export class MysqlStudentRepository implements StudentInterface {
    async getAllTutors(): Promise<TutorEntity[]> {
        try {
            const tutors = await TutorModel.findAll();
            if (!tutors) {
                return [];
            }
            return tutors;
        } catch (error) {
            signale.error(error);
            return [];
        }
    }
    async getStudentsFromTutor(id: string): Promise<StudentEntity[] | null> {
        try {
            const tutor = await TutorModel.findOne({ where: { id } });
            if (!tutor) {
                return null;
            }
            const students = await StudentModel.findAll({ where: { tutorId: id } });
            return students;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getAllStudents(): Promise<StudentEntity[]> {
        try {
            const students = await StudentModel.findAll();

            if (!students) {
                return [];
            }
            return students;
        } catch (error) {
            signale.error(error);
            return [];
        }
    }

    async getSubjectsFromStudent(id: string): Promise<SubjectEntity[] | null> {
        try {
            const student = await StudentModel.findOne({ where: { id } });
            if (!student) {
                return null;
            }
            const subjectStudents = await SubjectStudentModel.findAll({ where: { studentId: id } });

            const subjects = await Promise.all(subjectStudents.map(async (subjectStudent) => {
                const subject = await SubjectModel.findOne({ where: { id: subjectStudent.subjectId } });
                return subject;
            }));

            return subjects as SubjectEntity[];
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async createStudent(student: StudentEntity): Promise<StudentEntity | null> {
        try {
            const createdStudent = await StudentModel.create({
                id: student.id,
                firstName: student.firstName,
                lastName: student.lastName
            });
            return createdStudent;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async createTutor(tutor: TutorEntity): Promise<TutorEntity | null> {
        try {
            const createdTutor = await TutorModel.create({
                id: tutor.id,
                firstName: tutor.firstName,
                lastName: tutor.lastName,
            });
            return createdTutor;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async createSubject(subject: SubjectEntity): Promise<SubjectEntity | null> {
        try {
            const createdSubject = await SubjectModel.create({
                id: subject.id,
                name: subject.name,
            });
            return createdSubject;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async addStudentToTutor(studentId: string, tutorId: string): Promise<StudentEntity[] | null> {
        try {
            const student = await StudentModel.findOne({ where: { id: studentId } });
            const tutor = await TutorModel.findOne({ where: { id: tutorId } });

            if (!student || !tutor) {
                return null;
            }

            await tutor.$add('students', student);

            const tutorStudents = await this.getStudentsFromTutor(tutorId);

            return tutorStudents;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async addSubjectToStudent(studentId: string, subjectId: string): Promise<SubjectEntity[] | null> {
        try {
            const student = await StudentModel.findOne({ where: { id: studentId } });
            const subject = await SubjectModel.findOne({ where: { id: subjectId } });

            if (!student || !subject) {
                return null;
            }

            await student.$add('subjects', subject);

            const subjectStudents = await this.getSubjectsFromStudent(studentId);

            return subjectStudents;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getStudentById(id: string): Promise<StudentEntity | null> {
        try {
            const student = await StudentModel.findOne({ where: { id } });
            if (!student) {
                return null;
            }
            return student;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }

    async getTutorById(id: string): Promise<TutorEntity | null> {
        try {
            const tutor = await TutorModel.findOne({ where: { id } });
            if (!tutor) {
                return null;
            }
            return tutor;
        } catch (error) {
            signale.error(error);
            return null;
        }
    }
}
