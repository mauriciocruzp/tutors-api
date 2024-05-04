import { StudentEntity } from "../../domain/entities/student.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";
import { v4 as uuidv4 } from "uuid";
import signale from "signale";

export class CreateStudentUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(firstName: string, lastName: string): Promise<StudentEntity | null> {
        const id = uuidv4();
        const student = new StudentEntity(id, firstName, lastName, "");
        const createdStudent = await this.repository.createStudent(student);

        if (!createdStudent) {
            signale.error("Failed to create student");
            return null;
        }
        return createdStudent;
    }
}

