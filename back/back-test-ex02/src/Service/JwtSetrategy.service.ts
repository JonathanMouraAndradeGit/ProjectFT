import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "src/Entities/User.entity";
import { ExtractJwt, Strategy } from 'passport-jwt';
export class JwtStrategy extends PassportStrategy(Strategy,"local"){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // Garante que tokens expirados não serão aceitos
            secretOrKey: "123", // Chave secreta do .env
        })
    }
    async validate(payload:any){
        return {name:payload.name}
    }
}