import { StudentEntity } from "../../domain/entities/student.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";
import signale from "signale";

export class GetStudentByIdUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(id: string): Promise<StudentEntity | null> {
        const student = await this.repository.getStudentById(id);

        if (!student) {
            signale.error("Failed to get student by id");
            return null;
        }
        return student;
    }
}
