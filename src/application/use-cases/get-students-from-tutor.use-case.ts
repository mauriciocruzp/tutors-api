import signale from "signale";
import { StudentInterface } from "../../domain/interfaces/student.interface";

export class GetStudentsFromTutorUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(tutorId: string) {
        const students = await this.repository.getStudentsFromTutor(tutorId);

        if (!students) {
            signale.error("Failed to get students from tutor");
            return null;
        }
        return students;
    }
}
