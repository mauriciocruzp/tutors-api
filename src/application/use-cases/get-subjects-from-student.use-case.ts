import { StudentInterface } from "../../domain/interfaces/student.interface";
import signale from "signale";

export class GetSubjectsFromStudentUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(studentId: string) {
        const subjects = await this.repository.getSubjectsFromStudent(studentId);

        if (!subjects) {
            signale.error("Failed to get subjects from student");
            return null;
        }
        return subjects;
    }
}
