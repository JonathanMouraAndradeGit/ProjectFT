import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Long } from "typeorm/browser";
import { UsrRoles } from "./roles";
import { User } from "./User.entity";
@Entity()
export class Roles{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    role:UsrRoles;
    @ManyToMany(()=>User,(user)=>user.role)
    user:User[]
}