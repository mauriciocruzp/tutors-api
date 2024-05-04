import { StudentEntity } from "../entities/student.entity";
import { SubjectStudentEntity } from "../entities/subject-student.model";
import { SubjectEntity } from "../entities/subject.entity";
import { TutorEntity } from "../entities/tutor.entity";

export interface StudentInterface {
    getAllTutors(): Promise<TutorEntity[] | null>;
    getStudentsFromTutor(id: string): Promise<StudentEntity[] | null>;
    getAllStudents(): Promise<StudentEntity[] | null>;
    getSubjectsFromStudent(id: string): Promise<SubjectEntity[] | null>;
    createStudent(student: StudentEntity): Promise<StudentEntity | null>;
    createTutor(tutor: TutorEntity): Promise<TutorEntity | null>;
    createSubject(subject: SubjectEntity): Promise<SubjectEntity | null>;
    addStudentToTutor(studentId: string, tutorId: string): Promise<StudentEntity[] | null>;
    addSubjectToStudent(studentId: string, subjectId: string): Promise<SubjectEntity[] | null>;
    getTutorById(id: string): Promise<TutorEntity | null>;
    getStudentById(id: string): Promise<StudentEntity | null>;
}
