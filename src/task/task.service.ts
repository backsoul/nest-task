import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './dto/task.interface';
import { v4 as uuid4 } from 'uuid';
@Injectable()
export class TaskService {
  tasks: ITask[] = [];
  create(taskDTO: TaskDTO): ITask {
    const task = {
      id: uuid4(),
      ...taskDTO,
    };
    this.tasks.push(task);
    return task;
  }
  findAll(): ITask[] {
    return this.tasks;
  }
  findOne(id: string): ITask {
    return this.tasks.find((a) => a.id == id);
  }
  update(id: string, taskDTO: TaskDTO): ITask {
    const idx = this.tasks.findIndex((a) => a.id == id);
    this.tasks[idx] = { id, ...taskDTO };
    return this.tasks[idx];
  }

  delete(id: string): string {
    const idx = this.tasks.findIndex((a) => a.id == id);
    this.tasks = this.tasks.slice(idx, 1);
    return 'La tarea ha sido eliminada';
  }
}
