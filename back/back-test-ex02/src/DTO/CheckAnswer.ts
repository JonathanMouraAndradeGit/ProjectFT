import { IsNotEmpty, IsNumber } from "class-validator"

export class checkAnswerDTO{
    @IsNotEmpty()
    @IsNumber()
    idQuestion:number
    @IsNotEmpty()
    @IsNumber()
    idAnwer:number
}