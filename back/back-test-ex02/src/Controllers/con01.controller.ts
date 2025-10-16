import { Controller,Get,Post,Put,Delete,Headers, Query, UseGuards, UsePipes, ValidationPipe, Body } from "@nestjs/common";
import { Dec1 } from "src/Decorators/decorator1";
import { UserDTO } from "src/DTO/UserDTO.dto";
import { Guard1 } from "src/Guards/guard01.guard";
import { Pipe1 } from "src/Pipes/Pipe1.pipe";
import { AuthService } from "src/Service/AuthService.service";
import { UserServiceDB } from "src/Service/UserDB.service";
import { AuthG } from "src/Guards/authG.guard";
import { JwtService } from "@nestjs/jwt";
import { QuestionService } from "src/Service/Question.service";

import { QuestionDTO } from "src/DTO/QuestionDTO"; 
import { checkAnswerDTO } from "src/DTO/CheckAnswer";
import { SyllabsService } from "src/Service/Syllabs.service";
@Controller("/usr")
@UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
}))
export class Con01{
    constructor(private serv:UserServiceDB,private auth:AuthService,
        private jwt:JwtService,
        private questServ:QuestionService,
        private syllabV:SyllabsService
    ){

    }
    @Get("/usr")
    getValues2(@Dec1("") usr:any){
        return {user:usr}
    }
    @Get("/")
    getValues(){
        return {msg:"bolds"}
    }
    @UseGuards(Guard1)
    @Get("/canAct")
    getValues3(){
        return {msg:"succesful access"}
    }
    //@UsePipes(Pipe1)
    @Get("/getPipe")
    getValues4(@Query("msg", Pipe1) msg:any){
        return {res:msg}
    }

    @Post("/userinsert")
    getValues5(@Body() user:UserDTO){
        console.log(user)
        let result = this.serv.insertUser(user)
        return result
    }
    @Get("/getAll")
    getValues6(){
        return this.serv.getThenAll()
    }
    @Post("/login")
    async tryLog(@Body() usr:any){
        let obj = await this.auth.checkUser(usr)
        if(obj){
            return {token:this.auth.genoken(obj)}
        }else{
            return {msg:"invalid Authentication"}
        }
    }
    @Get("/authTest")
    @UseGuards(AuthG)
    checkAuth(@Headers("Authorization") auth:string){
        auth = auth.replace('Bearer ', '')
        console.log(this.jwt.decode(auth))
        return "authentication successful"
    }
    @Post("/addPoints")
    @UseGuards(AuthG)
    addPoints(@Headers("Authorization") auth:string,@Body() qtd:any){
        auth = auth.replace('Bearer ', '')
        let res = this.jwt.decode(auth)
        let result = this.serv.addPoints(res.name,qtd)
        return result
    }

    @Post("/insrtQuestion")
    async addQuestion(@Body() quest:QuestionDTO){
        let result = await this.questServ.insertQuestions(quest)
        return {msg:"ok",body:result}
    }
    @Get("/Question")
    async getQuestion(){
        let result = await this.questServ.getAllQuestions()
        return result
    }
    @Get("/QuestionCons")
    async getQuestionCons(){
        let result = await this.questServ.getAllQuestionsContraint()
        return result
    }
    @Post("/checkQuestion")
    async checkQuestion(@Body() quest:checkAnswerDTO){
        console.log("here is the question dto")
        console.log(quest)
        let result = await this.questServ.checkAnswer(quest)
        return {msg:"ok",body:result}
    }
    @Get("/getAllSyllabs")
    async getAllSyllabs(){
        return this.syllabV.getAllArrs()
    }
}