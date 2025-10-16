import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { SingleSyllab } from "src/Entities/SingleSyllab.entity";
import { Syllabs } from "src/Entities/Syllabs.entity";
import { Repository } from "typeorm";

@Injectable()
export class SyllabsService{
    constructor(@InjectRepository(Syllabs) private syllabE:Repository<Syllabs>,
@InjectRepository(SingleSyllab) private singleS:Repository<SingleSyllab>){}


    async insertAll(arr){
        try{
            for(let vl of arr){
                let arr:SingleSyllab[] = []
                let pos = 0
                let mainSyllab = this.syllabE.create({})
                mainSyllab = await this.syllabE.save(mainSyllab)
                for(let el of vl){
                    let resItem:SingleSyllab = this.singleS.create({syllab:el,pos:pos,syllabLst:mainSyllab})
                    resItem = await this.singleS.save(resItem)
                    //console.log(resItem)
                    if(resItem){
                        arr.push(resItem)
                    }
                    pos+=1
                }
                mainSyllab.arraySyllabs = arr
                //console.log(mainSyllab)
                await this.syllabE.save(mainSyllab)
            }
            return "criado com sucesso syllabs"
        }catch(e){
            console.log(e)
            return "erro ao criar syllabs"
        }
    }
    async getAllArrs(){
        return await this.syllabE.find({relations:["arraySyllabs"]})
    }
}