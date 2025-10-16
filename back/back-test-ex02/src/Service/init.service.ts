import { Injectable, OnModuleInit } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Roles } from "src/Entities/Roles.entity";
import { Repository } from "typeorm";
import { UsrRoles } from "src/Entities/roles";
import { questArr } from "src/DTO/questionsInitial";
import { QuestionService } from "./Question.service";
import { QuestionDTO } from "src/DTO/QuestionDTO";
import { SyllabsService } from "./Syllabs.service";
@Injectable()
export class Init implements OnModuleInit{
    constructor(@InjectRepository(Roles) private roles:Repository<Roles>,private questServ:QuestionService,
private syllabS:SyllabsService){

    }
    onModuleInit() {
        //throw new Error("Method not implemented.");
        const arr = ["ADMIN","USER"]
        arr.forEach(async (e)=> {
            console.log("inserting "+e)
            console.log(UsrRoles[e])
            let result = await this.roles.findOne({where:{role: UsrRoles[e]}})
            console.log(result)
            if(!result){
                let r = new Roles();
                r.role = UsrRoles[e];
                r.user=[]
                this.roles.save(r)
            }
        });
        const questMeth = async ()=>{
            let res = await this.questServ.getAllQuestions()
            if(res.length == 0 ){
                for(let i of questArr){
                    
                    this.questServ.insertQuestions(i)
                }
            }
        }
        const loadSyllbs = async ()=>{
            let qtd = await this.syllabS.getAllArrs()
            if(qtd.length == 0){
                let mainarr = [["sor","ve","te"],["pe","ra"],["ma","mao"],["mo","ran","go"],["bi","go","de"]]
                let result = await this.syllabS.insertAll(mainarr)
                console.log(result)
            }
        }
        questMeth()
        loadSyllbs()
    }
}