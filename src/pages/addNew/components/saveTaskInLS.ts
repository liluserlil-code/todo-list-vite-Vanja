import { TASKS } from "../../../components/constants";
import type { INewTask } from "../../../components/types";
import { getTasksArrayFromLS } from "../../../components/getTasksArrayFromLS";

function saveTaskInLS ({text, status}: {text: string; status: string}) {
    const tasksArray: INewTask[] = getTasksArrayFromLS();
    const newTask: INewTask = {text: text, status: status};
    localStorage.setItem(TASKS, JSON.stringify([...tasksArray, newTask]));
}

export default saveTaskInLS;