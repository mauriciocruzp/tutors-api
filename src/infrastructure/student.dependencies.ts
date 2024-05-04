import { CreateSubjectUseCase } from "../application/use-cases/create-subject.use-case";
import { MysqlStudentRepository } from "./repositories/mysql-student.repository";
import { StudentController } from "./controllers/student.controller";
import { CreateTutorUseCase } from "../application/use-cases/create-tutor.use-case";
import { CreateStudentUseCase } from "../application/use-cases/create-student.use-case";
import { GetStudentsUseCase } from "../application/use-cases/get-students.use-case";
import { GetTutorsUseCase } from "../application/use-cases/get-tutors.use-case";
import { AddStudentToTutorUseCase } from "../application/use-cases/add-student-to-tutor.use-case";
import { AddSubjectToStudentUseCase } from "../application/use-cases/add-subject-to-student.use-case";
import { GetStudentsFromTutorUseCase } from "../application/use-cases/get-students-from-tutor.use-case";
import { GetSubjectsFromStudentUseCase } from "../application/use-cases/get-subjects-from-student.use-case";

const mySqlStudentRepository = new MysqlStudentRepository();

const createSubjectUseCase = new CreateSubjectUseCase(mySqlStudentRepository);
const createTutorUseCase = new CreateTutorUseCase(mySqlStudentRepository);
const createStudentUseCase = new CreateStudentUseCase(mySqlStudentRepository);
const getStudentsUseCase = new GetStudentsUseCase(mySqlStudentRepository);
const getTutorsUseCase = new GetTutorsUseCase(mySqlStudentRepository);
const addStudentToTutorUseCase = new AddStudentToTutorUseCase(mySqlStudentRepository);
const addSubjectToStudentUseCase = new AddSubjectToStudentUseCase(mySqlStudentRepository);
const getStudentsFromTutorUseCase = new GetStudentsFromTutorUseCase(mySqlStudentRepository);
const getSubjectsFromStudentUseCase = new GetSubjectsFromStudentUseCase(mySqlStudentRepository);

export const studentController = new StudentController(getStudentsFromTutorUseCase, getSubjectsFromStudentUseCase, addStudentToTutorUseCase, addSubjectToStudentUseCase, createSubjectUseCase, createStudentUseCase, createTutorUseCase, getTutorsUseCase, getStudentsUseCase);
