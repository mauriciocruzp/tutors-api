import { CreateSubjectUseCase } from "../application/use-cases/create-subject.use-case";
import { MysqlRepository } from "./repositories/mysql.repository";
import { Controller } from "./controllers/controller";
import { CreateTutorUseCase } from "../application/use-cases/create-tutor.use-case";
import { CreateStudentUseCase } from "../application/use-cases/create-student.use-case";
import { GetStudentsUseCase } from "../application/use-cases/get-students.use-case";
import { GetTutorsUseCase } from "../application/use-cases/get-tutors.use-case";
import { AddStudentToTutorUseCase } from "../application/use-cases/add-student-to-tutor.use-case";
import { AddSubjectToStudentUseCase } from "../application/use-cases/add-subject-to-student.use-case";
import { GetStudentsFromTutorUseCase } from "../application/use-cases/get-students-from-tutor.use-case";
import { GetSubjectsFromStudentUseCase } from "../application/use-cases/get-subjects-from-student.use-case";
import { GetStudentByIdUseCase } from "../application/use-cases/get-student-by-id.use-case";
import { GetTutorByIdUseCase } from "../application/use-cases/get-tutor-by-id.use-case";

const mySqlRepository = new MysqlRepository();

const getStudentByIdUseCase = new GetStudentByIdUseCase(mySqlRepository);
const createSubjectUseCase = new CreateSubjectUseCase(mySqlRepository);
const createTutorUseCase = new CreateTutorUseCase(mySqlRepository);
const createStudentUseCase = new CreateStudentUseCase(mySqlRepository);
const getStudentsUseCase = new GetStudentsUseCase(mySqlRepository);
const getTutorsUseCase = new GetTutorsUseCase(mySqlRepository);
const addStudentToTutorUseCase = new AddStudentToTutorUseCase(mySqlRepository);
const addSubjectToStudentUseCase = new AddSubjectToStudentUseCase(mySqlRepository);
const getStudentsFromTutorUseCase = new GetStudentsFromTutorUseCase(mySqlRepository);
const getSubjectsFromStudentUseCase = new GetSubjectsFromStudentUseCase(mySqlRepository);
const getTutorByIdUseCase = new GetTutorByIdUseCase(mySqlRepository);

export const controller = new Controller(getTutorByIdUseCase, getStudentByIdUseCase, getStudentsFromTutorUseCase, getSubjectsFromStudentUseCase, addStudentToTutorUseCase, addSubjectToStudentUseCase, createSubjectUseCase, createStudentUseCase, createTutorUseCase, getTutorsUseCase, getStudentsUseCase);
