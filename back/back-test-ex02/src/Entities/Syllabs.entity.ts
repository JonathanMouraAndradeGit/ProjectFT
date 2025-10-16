import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SingleSyllab } from "./SingleSyllab.entity";
import { single } from "rxjs";

@Entity()
export class Syllabs{
    @PrimaryGeneratedColumn()
    id:number
    @OneToMany(()=>SingleSyllab,(single)=>single.syllabLst)
    arraySyllabs:SingleSyllab[]
}