import { IsBoolean, IsNotEmpty } from "class-validator"


export class answersDTO{
    @IsNotEmpty()
    description:string
    @IsNotEmpty()
    @IsBoolean()
    isRight:boolean
}