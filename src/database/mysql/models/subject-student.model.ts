import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface SubjectStudentAttributes {
    id: string;
    subjectId: string;
    studentId: string;
}

@Table({
    tableName: 'subject_student',
    modelName: 'SubjectStudent',
    timestamps: false,
})

export default class SubjectStudentModel extends Model implements SubjectStudentAttributes {
    @Column({
        primaryKey: true,
        type: DataType.STRING,
    })
    declare id: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare subjectId: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    declare studentId: string;
}
