import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsNotEmpty, IsString } from "class-validator"
import { answersDTO } from "./AnswersDTO"

export class QuestionDTO{
    @IsNotEmpty()
    @IsString()
    question:string
    @IsNotEmpty()
    @IsString()
    level:string
    @ArrayNotEmpty()
    @ArrayMinSize(5)
    @ArrayMaxSize(6)
    answers:answersDTO[]
}