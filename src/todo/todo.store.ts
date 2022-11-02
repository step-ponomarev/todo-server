import { Injectable } from '@nestjs/common';
import { Task } from "../types";

type Store = {
    [key: number]: Task
}

@Injectable()
export class TodoStore {
    private readonly tasks: Store = {};

    public put(task: Task): void {
        this.tasks[task.id] = task;
    }

    public get(id: number): Task | null {
        const task = this.tasks[id];
        return !task ? null : task;
    }

    public getAll(): Task[] {
        return Object.values(this.tasks);
    }

    public remove(id: number): boolean {
        if (!this.tasks[id]) {
            return false;
        }

        delete this.tasks[id];

        return true;
    }
}
