import { TutorEntity } from "../../domain/entities/tutor.entity";
import { StudentInterface } from "../../domain/interfaces/student.interface";

export class GetTutorsUseCase {
    constructor(readonly repository: StudentInterface) { }

    async execute(): Promise<TutorEntity[] | null> {
        const tutors = await this.repository.getAllTutors();

        if (!tutors) {
            return null;
        }
        return tutors;
    }
}
