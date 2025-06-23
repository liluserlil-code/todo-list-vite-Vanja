import s from "./editTaskForm.module.css"
import { useNavigate } from "react-router-dom";
import { useState, type ChangeEvent, type ReactElement } from "react";
import { getTasksArrayFromLS } from "../../../components/LS/getTasksArrayFromLS";
import type { INewTask } from "../../../components/types";
import saveTaskInLS from "../../../components/LS/saveTasksArrayInLS";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

//TODO store task info in object instead array
//TODO search useParams. Give edit task id in url params. Get task data by this id through LS.
const EditTaskForm = ({id}: {id: number}):ReactElement => {
    const tasksArray: INewTask[] = getTasksArrayFromLS();

    const [text, setText] = useState<string>(tasksArray[id].text);
    const [status, setStatus] = useState<string>(tasksArray[id].status);

    const TextChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    // const StatusChanged = (event: ChangeEvent<HTMLSelectElement>) => {
    //     setStatus(event.target.value)
    // }

    const navigate = useNavigate();
    const handleSubmit = () => {
        saveTaskInLS({text, status, id});
        navigate("/");
    }

    return(
        <form action="" className={s.form} onSubmit={handleSubmit}>
            <textarea onChange={TextChanged} className={s.textarea} defaultValue={tasksArray[id].text}></textarea>
            <label htmlFor="Status" className={s.label}>Статус:</label>
            {/* <select name="" id="Status" onChange={StatusChanged} className={s.select} defaultValue={tasksArray[id].status}>
                <option value="Не начата">Не начата</option>
                <option value="В процессе">В процессе</option>
                <option value="Завершена">Завершена</option>
            </select> */}
            <DropdownMenu.Root>
                <DropdownMenu.Trigger className={s.trigger} defaultValue={"Открыть"} id="Status">{status}</DropdownMenu.Trigger>
                <DropdownMenu.Content className={s.content}>
                    <DropdownMenu.Item onSelect={() => setStatus("Не начата")} className={s.item}>Не начата</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => setStatus("В процессе")} className={s.item}>В процессе</DropdownMenu.Item>
                    <DropdownMenu.Item onSelect={() => setStatus("Завершена")} className={s.item}>Завершена</DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
            <button type="submit" disabled={text.trim()===""}className={s.button}>Save</button>
            <button type="submit" disabled={text.trim() === ""} className={s.button}>Save</button>
        </form>
    )
}

export default EditTaskForm;