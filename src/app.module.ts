import { Module } from '@nestjs/common';
import { TodoStore } from './todo/todo.store';
import { TodoController } from "./todo/todo.controller";

@Module({
    controllers: [ TodoController ],
    providers: [ TodoStore ]
})

export class AppModule {}
