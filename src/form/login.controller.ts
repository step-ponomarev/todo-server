import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginService } from "./login.service";

type LoginDataType = {
    loginField: string,
    passwordField: string
}

@Controller()
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get('login')
    public login(@Res() res: Response, @Query() query: LoginDataType) {
        return res.render(
            this.loginService.isCredentialValid(query.loginField, query.passwordField)
                ? 'form/success'
                : 'form/error',
            {
                message: `Hello, ${query.loginField}`
            }
        );
    }


}
