import { Module } from '@nestjs/common';
import { TodoStore } from './todo/todo.store';
import { TodoController } from "./todo/todo.controller";
import { join } from "path";
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'static'),
        }),
    ],
    controllers: [ TodoController ],
    providers: [ TodoStore ]
})
export class AppModule {
}
