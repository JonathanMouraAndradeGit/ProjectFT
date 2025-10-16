import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
const authIns = AuthGuard("local")
@Injectable()
export class AuthG extends authIns{}