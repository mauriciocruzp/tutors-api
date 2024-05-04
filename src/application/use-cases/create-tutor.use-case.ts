import { TutorEntity } from "../../domain/entities/tutor.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";
import { v4 as uuidv4 } from "uuid";
import signale from "signale";

export class CreateTutorUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(firstName: string, lastName: string): Promise<TutorEntity | null> {
        const id = uuidv4();
        const tutor = new TutorEntity(id, firstName, lastName);
        const createdTutor = await this.repository.createTutor(tutor);

        if (!createdTutor) {
            signale.error("Failed to create tutor");
            return null;
        }
        return createdTutor;
    }
}
