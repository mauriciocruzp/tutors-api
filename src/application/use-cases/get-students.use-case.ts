import { StudentEntity } from "../../domain/entities/student.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";

export class GetStudentsUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(): Promise<StudentEntity[] | null> {
        const students = await this.repository.getAllStudents();

        if (!students) {
            return null;
        }
        return students;
    }
}
