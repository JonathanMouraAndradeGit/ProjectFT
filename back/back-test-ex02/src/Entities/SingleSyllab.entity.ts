import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Syllabs } from "./Syllabs.entity";
@Entity()
export class SingleSyllab{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    pos:number
    @Column()
    syllab:string
    @ManyToOne(()=>Syllabs,(syllabs)=>syllabs.arraySyllabs)
    @JoinColumn()
    syllabLst:Syllabs
}