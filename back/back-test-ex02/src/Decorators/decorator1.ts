import { createParamDecorator } from "@nestjs/common"
import { ExecutionContext } from "@nestjs/common"
export const Dec1 = createParamDecorator((value:any,context:ExecutionContext)=>{
    let request = context.switchToHttp().getRequest()
    return request.query["usr"].toUpperCase()
}) 