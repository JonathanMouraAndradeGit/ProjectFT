import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "src/DTO/UserDTO.dto";
import { UsrRoles } from "src/Entities/roles";
import { Roles } from "src/Entities/Roles.entity";
import { User } from "src/Entities/User.entity";
import { Repository } from "typeorm";
import { Points } from "src/Entities/Points.entity";

export class UserServiceDB{
    constructor(@InjectRepository(User) private usr:Repository<User>,
@InjectRepository(Roles) private rol:Repository<Roles>,
@InjectRepository(Points) private point:Repository<Points>){

    }
    async insertUser(usr:UserDTO){
        //usr.role = lstRole
        let usrE = await this.toUser(usr) //this.usr.create({name:usr.name,email:usr.email,password:usr.password,role:lstRole})
        try{
            console.log("final user object is")
            console.log(usrE)
            this.usr.save(usrE)
            return {msg:"usuário inserido"}
        }catch(e){
            return {msg:`Error: ${e}`}
        }
    }
    getThenAll2(){
        return this.usr.find({relations: ['role','points']})
    }
    async getThenAll() {
    return this.usr.createQueryBuilder('user')
        .leftJoinAndSelect('user.role', 'role')
        .leftJoinAndSelect('user.points', 'points')
        .orderBy('points.points', 'DESC')
        .getMany();
    }
    async addPoints(nameU,qtd){
        console.log("retreaved points is "+qtd.points)
        try{
            let user = await this.usr.findOne({where:{name:nameU},relations:['points']}) 
            //this.usr.findOneBy({name:nameU}) só filtro simples sem o relations
            if(user){
                console.log(user)
                console.log(`user poinsts ${user.points.points} adding ${qtd.points}`)
                let p = user.points.points+qtd.points
                user.points.points = p
                user.points.qtdAnswer = user.points.qtdAnswer+1
                if(qtd.correct){
                    user.points.RightAnswers = user.points.RightAnswers+1
                }
                this.usr.save(user)
            }
            return {msg:"points updated"}
        }catch(e){
            console.log(e)
            return {errmsg:"unable to add points"}
        }
    }
    async toUser(usr:UserDTO){
        let lstRole:Roles[]=[]
        console.log("the user in roles is ")
        console.log(usr)
        let ps = await this.point.save({points:0,RightAnswers:0,qtdAnswer:0})
        let u = this.usr.create({name:usr.name,email:usr.email,password:usr.password})
        u = await this.usr.save(u)
        for (const el of usr.role){
            let res = await this.rol.findOneBy({role:UsrRoles[el]})
            console.log("finding roles ")
            console.log(res)
            if(res){
                lstRole.push(res);
            }
        }
        try{
        //let u = this.usr.create({name:usr.name,email:usr.email,password:usr.password})
        u.points = ps
        console.log("created user is")
        console.log(u)
            u.role = lstRole
        }catch(e){
            console.log("error is ")
            console.log(e)
        }
        return u
    }
}