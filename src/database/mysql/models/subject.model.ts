import { Table, Model, Column, DataType } from "sequelize-typescript";

export interface SubjectAttributes {
    id: string;
    name: string;
}

@Table({
    tableName: 'subjects',
    modelName: 'Subject',
    timestamps: false,
})

export default class SubjectModel extends Model implements SubjectAttributes {
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
    declare name: string;
}
