import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { QuestionE } from "./Question.entity";

@Entity()
export class OptionAnswer{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    description:string
    @Column()
    isRight:boolean
    @ManyToOne(()=>QuestionE,(qe)=>qe.answers)
    @JoinColumn()
    question:QuestionE
}