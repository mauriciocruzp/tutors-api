import { TutorEntity } from "../../domain/entities/tutor.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";
import signale from "signale";

export class GetTutorByIdUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(id: string): Promise<TutorEntity | null> {
        const tutor = await this.repository.getTutorById(id);

        if (!tutor) {
            signale.error("Failed to get tutor by id");
            return null;
        }
        return tutor;
    }
}
