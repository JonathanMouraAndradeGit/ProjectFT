import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Level } from "./levels";
import { OptionAnswer } from "./OptionAnswer.entity";

@Entity()
export class QuestionE{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    question:string
    @Column()
    level:Level
    @OneToMany(()=>OptionAnswer,(opta)=>opta.question)
    answers:OptionAnswer[]
}