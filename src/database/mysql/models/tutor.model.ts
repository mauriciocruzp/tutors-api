import { Table, Model, Column, DataType } from "sequelize-typescript";

export interface TutorAttributes {
    id: string;
    firstName: string;
    lastName: string;
}

@Table({
    tableName: 'tutors',
    modelName: 'Tutor',
    timestamps: false,
})

export default class TutorModel extends Model implements TutorAttributes {
    @Column({
        primaryKey: true,
        type: DataType.STRING,
        unique: true,
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
}
