import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entities/User.entity";
import { Repository } from "typeorm";

export class AuthService{
    constructor(@InjectRepository(User) private usrServ:Repository<User>,
    private jwtService: JwtService){}
    async checkUser(obj:any){
        let res = await this.usrServ.findOne({where:{name:obj.name}})
        if(res && obj.password == res.password){
            return res
        }else{
            return false
        }
    }
    genoken(obj:any){
        let payload = {name:obj.name}
        return this.jwtService.sign(payload)
    }
}