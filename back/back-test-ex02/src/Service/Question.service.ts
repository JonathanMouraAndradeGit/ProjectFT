import { InjectRepository } from "@nestjs/typeorm";
import { QuestionDTO } from "src/DTO/QuestionDTO";
import { OptionAnswer } from "src/Entities/OptionAnswer.entity";
import { QuestionE } from "src/Entities/Question.entity";
import { Repository } from "typeorm";
import { Level } from "src/Entities/levels";
import { answersDTO } from "src/DTO/AnswersDTO";
import { checkAnswerDTO } from "src/DTO/CheckAnswer";
export class QuestionService{
    constructor(@InjectRepository(QuestionE) private questionE:Repository<QuestionE>,
    @InjectRepository(OptionAnswer) private anwerOpt:Repository<OptionAnswer>){

    }
    async insertQuestions(obj:QuestionDTO){
        try{
            let questObj = this.questionE.create({question:obj.question,level:Level[obj.level],answers:[]})
            questObj = await this.questionE.save(questObj)
            let answersarr:OptionAnswer[]=[]
            for (const el of obj.answers){
            //await obj.answers.forEach(async (el:answersDTO)=>{
                let ans = this.anwerOpt.create({description:el.description,isRight:el.isRight,question:questObj})
                ans = await this.anwerOpt.save(ans)
                answersarr.push(ans)
                //console.log(answersarr)
            //})
            }
            console.log(answersarr)
            questObj.answers = answersarr
            questObj = await this.questionE.save(questObj)
            return questObj
        }catch(e){
            console.log(e)
            return {msg:"erro ao inseriri question"}
        }
    }
    async checkAnswer(quest:checkAnswerDTO){
        console.log("readingbody")
        console.log(quest)
        try{
            let result:QuestionE | null = await this.questionE.findOne({where:{id:quest.idQuestion},relations:["answers"]})
            console.log(result)
            let answre:OptionAnswer | undefined = result?.answers.filter((el)=>el.id == quest.idAnwer)[0]
            let right = result?.answers.filter((el)=>el.isRight == true)[0]
            if(answre && answre.isRight){
                return {msg:"resposta correta",obj:answre,isCorrect:true}
            }else{
                return {msg:"resposta errada",obj:right,isCorrect:false}
            }
        }catch(e){
            console.log(e)
            return {msg:"erro ao checar"}
        }
    }

    getAllQuestions(){
        return this.questionE.find({relations:["answers"]})
    }
    async getAllQuestionsContraint(){
        let arrobj = await this.questionE.find({relations:["answers"]})
        arrobj = arrobj.map((el:any)=>{
           el.answers = el.answers.map((el)=>{
                let {isRight,...obj} = el
                return obj
            })
            return el
        })
        return arrobj
    }
}