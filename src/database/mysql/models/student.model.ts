import { Column, DataType, Model, Table } from "sequelize-typescript";

export interface StudentAttributes {
    id: string;
    firstName: string;
    lastName: string;
    tutorId: string;
}

@Table({
    tableName: 'students',
    modelName: 'Student',
    timestamps: false,
})

export default class StudentModel extends Model implements StudentAttributes {
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

    @Column({
        allowNull: true,
        type: DataType.STRING,
    })
    declare tutorId: string;
}
