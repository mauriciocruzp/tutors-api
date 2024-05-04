import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import TutorModel from "./tutor.model";
import SubjectModel from "./subject.model";
import SubjectStudentModel from "./subject-student.model";

@Table({
    tableName: 'students',
    modelName: 'Student',
    timestamps: false,
})

export default class StudentModel extends Model {
    @Column({
        primaryKey: true,
        type: DataType.STRING,
    })
    declare id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare firstName: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare lastName: string;

    @ForeignKey(() => TutorModel)
    @Column
    declare tutorId: string;

    @BelongsTo(() => TutorModel)
    declare tutor: TutorModel;

    @BelongsToMany(() => SubjectModel, () => SubjectStudentModel)
    declare subjects: SubjectModel[];
}
