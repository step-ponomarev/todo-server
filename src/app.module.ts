import { Module } from '@nestjs/common';
import { LoginService } from './form/login.service';
import { LoginController } from "./form/login.controller";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
  imports: [
      ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class AppModule {}
