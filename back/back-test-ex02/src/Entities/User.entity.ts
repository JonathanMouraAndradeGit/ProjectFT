import { Entity,Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { Roles } from "./Roles.entity";
import { Points } from "./Points.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    password:string
    @ManyToMany(()=>Roles,(roles)=>roles.user)
    @JoinTable()
    role:Roles[]

    @OneToOne(()=>Points,(points)=>points.user,{cascade:true})
    @JoinColumn()
    points:Points
}