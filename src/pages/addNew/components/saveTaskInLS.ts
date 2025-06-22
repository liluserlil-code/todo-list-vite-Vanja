import { TASKS } from "../../../components/constants";
import type { INewTask } from "../../../components/types";

function saveTaskInLS ({text, status}: {text: string; status: string}) {
    // тут возможно ты скажешь что тут несколько функций выполняет эта функция, но я пока что не 
    // знаю как разнести это по разным файлам
    const arr = localStorage.getItem(TASKS);
    const lastTasks: INewTask[] = arr ? JSON.parse(arr) : [];
    // возможно по 2 этим строкам разделить
    const newTask: INewTask = {text: text, status: status};
    localStorage.setItem(TASKS, JSON.stringify([...lastTasks, newTask]));
}

export default saveTaskInLS;