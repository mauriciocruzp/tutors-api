import { SubjectEntity } from "../../domain/entities/subject.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";
import signale from "signale";

export class AddSubjectToStudentUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(studentId: string, subjectId: string): Promise<SubjectEntity[] | null> {
        const createdSubjectStudent = await this.repository.addSubjectToStudent(studentId, subjectId);
        if (!createdSubjectStudent) {
            signale.error("Failed to add subject to student");
            return null;
        }
        return createdSubjectStudent;
    }
}
