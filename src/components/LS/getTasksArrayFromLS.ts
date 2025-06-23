import type { INewTask } from "../types";
import { TASKS } from "../constants";

export function getTasksArrayFromLS ():INewTask[] {
    const arr = localStorage.getItem(TASKS);
    const lastTasks: INewTask[] = arr ? JSON.parse(arr) : []
    return (lastTasks);
}