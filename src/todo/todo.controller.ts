import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoStore } from "./todo.store";
import { Task } from "../types";

type CreateTodoDto = {
    description: string;
    done: boolean;
};

@Controller('api/todo')
export class TodoController {
    constructor(private readonly todoStore: TodoStore) {
    }

    @Delete('remove/:id')
    public removeById(@Param('id') id: number): boolean {
        return this.todoStore.remove(id);
    }

    @Post('create')
    public create(@Body() body: CreateTodoDto): Task {
        const task = { ...body, id: Date.now() };
        this.todoStore.put(task);

        return task;
    }

    @Get('get/:id')
    public get(@Param('id') id: number): Task | null {
        return this.todoStore.get(id);
    }
    
    @Get('get')
    public getAll(): Task[] {
        return this.todoStore.getAll();
    }
}
