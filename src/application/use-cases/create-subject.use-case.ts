import { SubjectEntity } from "../../domain/entities/subject.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";
import { v4 as uuidv4 } from "uuid";
import signale from "signale";

export class CreateSubjectUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(name: string): Promise<SubjectEntity | null> {
        const id = uuidv4();
        const subject = new SubjectEntity(id, name);
        const createdSubject = await this.repository.createSubject(subject);

        if (!createdSubject) {
            signale.error("Failed to create subject");
            return null;
        }
        return createdSubject;
    }
}
