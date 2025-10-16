

import { Expose } from "class-transformer"
import { ArrayMinSize, ArrayNotEmpty, IsArray, IsEmail,IsNotEmpty,IsString,MinLength } from "class-validator"

export class UserDTO{
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    @IsEmail()
    email:string
    @IsNotEmpty()
    @MinLength(5)
    password:string
    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(1)
    @IsString({ each: true })
    role:string[]
}