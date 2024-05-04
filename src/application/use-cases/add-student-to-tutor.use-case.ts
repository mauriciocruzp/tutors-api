import signale from "signale";
import { StudentEntity } from "../../domain/entities/student.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";

export class AddStudentToTutorUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(studentId: string, tutorId: string): Promise<StudentEntity[] | null> {
        const students = await this.repository.addStudentToTutor(studentId, tutorId);

        if (!students) {
            signale.error("Failed to add student to tutor");
            return null;
        }
        return students;
    }
}
