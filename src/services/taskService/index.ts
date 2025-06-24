import type { INewTask } from "../../domains/task"
import { TASKS } from "../../utils/constants";

export class TasksService {

    static getTaskArrayFromLS() {
        const arr = localStorage.getItem(TASKS);
        const lastTasks: INewTask[] = arr ? JSON.parse(arr) : []
        return (lastTasks);
    }

    static saveTaskInLS (text: string, status: string, id?: number) {
        const tasksArray: INewTask[] = this.getTaskArrayFromLS();
        const index = (id === undefined) ? tasksArray.length : id;
        
        const newTask: INewTask = {text: text, status: status, id: index};
        tasksArray[index] = newTask;
    
        localStorage.setItem(TASKS, JSON.stringify(tasksArray));
    }

    static getTaskById(id: number) {
        const tasksArray: INewTask[] = this.getTaskArrayFromLS();
        return (tasksArray[id]);
    }
}