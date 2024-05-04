import { SubjectStudentEntity } from "@src/domain/entities/subject-student.model";
import { StudentInterface } from "@src/domain/interfaces/student.interface";
import signale from "signale";

export class AddSubjectToStudentUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(studentId: string, subjectId: string): Promise<SubjectStudentEntity | null> {
        const createdSubjectStudent = await this.repository.addSubjecttoStudent(studentId, subjectId);
        if (!createdSubjectStudent) {
            signale.error("Failed to add subject to student");
            return null;
        }
        return createdSubjectStudent;
    }
}
