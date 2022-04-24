import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('note')
export class Note extends BaseEntity{

    @PrimaryGeneratedColumn()
    id : number;

    @Column({
        type: "varchar"
    })
    title : string;

    @Column({
        type: "text"
    })
    description : string;

    @Column({
        type: "varchar"
    })
    tag : string;
}