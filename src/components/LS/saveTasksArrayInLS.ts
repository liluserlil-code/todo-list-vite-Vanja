import { TASKS } from "../constants";
import type { INewTask } from "../types";
import { getTasksArrayFromLS } from "./getTasksArrayFromLS";


function saveTaskInLS ({ text, status, id }: { text: string; status: string; id: number; }) {
    const tasksArray: INewTask[] = getTasksArrayFromLS();
    const index = id === -1 ? tasksArray.length : id;
    
    const newTask: INewTask = {text: text, status: status, id: index};
    tasksArray[index] = newTask;

    localStorage.setItem(TASKS, JSON.stringify(tasksArray));
}

export default saveTaskInLS;