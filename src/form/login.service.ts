import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
  private static validator = /^[a-zA-Z0-9]{3,}$/;
  
  public isCredentialValid(login: string, password: string): boolean {
    return LoginService.validator.test(login)
        && LoginService.validator.test(password);
  }
}
