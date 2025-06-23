import s from "./NewTaskForm.module.css"
import { useNavigate } from "react-router-dom";
import { useState, type ReactElement } from "react";
import saveTaskInLS from "../../../components/LS/saveTasksArrayInLS";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const NewTaskForm = (): ReactElement => {
    //TODO write all types in useState
    const [text, setText] = useState<string>('');
    const [status, setStatus] = useState<string>('Не начата');

//TODO Task info store in this interface
    //TODO onTextChanged
    const onTextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }
    // const onStatusChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //     setStatus(event.target.value);
    // }


    const navigate = useNavigate();
    const id:number = -1;

    //TODO onClick
    const handleSubmit = () => {
        saveTaskInLS({text, status, id});
        navigate("/");
    }

    //TODO handle Save in onSubmit form action
    //TODO set onSubmit button disabled, if text value is empty
    return(
        // возможно эту форму нужно вывести в отдельный файл
        <form action="" className={s.form} onSubmit={handleSubmit}>
            <textarea placeholder="Add a new task..." onChange={onTextChanged} className={s.textarea}></textarea>
            <label htmlFor="Status" className={s.label} style={{fontSize: "20px", }}>Статус:</label>
            {/* <select name="" id="Status" onChange={onStatusChanged} className={s.select}>
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
        </form>
    )
}

export default NewTaskForm;