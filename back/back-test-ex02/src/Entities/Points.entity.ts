import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export  class Points{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    points:number
    @Column()
    qtdAnswer:number
    @Column()
    RightAnswers:number
    @OneToOne(()=>User,(user)=>user.points)
    user:User
}