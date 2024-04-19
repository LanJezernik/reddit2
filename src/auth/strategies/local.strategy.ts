import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {UnauthorizedException} from "@nestjs/common";
import {AuthService} from "../auth.service";

export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super();
    }

    validate(username:string, password:string) {
        const jwtUser = this.authService.validate({email:username,pass:password})
        if (!jwtUser) throw new UnauthorizedException();
        return jwtUser;
    }
}