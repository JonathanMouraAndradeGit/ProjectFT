import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";

export class Guard1 implements CanActivate{
    canActivate(context:ExecutionContext): boolean{
        let request = context.switchToHttp().getRequest()
        let len = request.query["msg"].length
        if(len > 5){
            return true
        }
        return false
    }
}