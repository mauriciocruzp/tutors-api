import signale from "signale";
import { StudentEntity } from "../../domain/entities/student.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";

export class AddStudentToTutorUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(studentId: string, tutorId: string): Promise<StudentEntity | null> {
        const student = await this.repository.addStudenttoTutor(studentId, tutorId);

        if (!student) {
            signale.error("Failed to add student to tutor");
            return null;
        }
        return student;
    }
}
