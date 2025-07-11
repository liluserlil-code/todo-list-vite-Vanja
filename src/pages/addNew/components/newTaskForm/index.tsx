import s from "./NewTaskForm.module.css"
import { useNavigate } from "react-router-dom";
import { useState, type ReactElement } from "react";
import { TasksService } from "../../../../services/taskService";

//TODO create Dropdown how own component, not in loaded library.
const NewTaskForm = (): ReactElement => {
    const navigate = useNavigate();
    const [text, setText] = useState<string>('');
    const [status, setStatus] = useState<string>('Не начата');

    const onTextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }
    const onStatusChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value);
    }
    const handleSubmit = () => {
        TasksService.saveTaskInLS(text, status);
        navigate("/");
    }

    return(
        <form action="" className={s.form} onSubmit={handleSubmit}>
            <textarea placeholder="Add a new task..." onChange={onTextChanged} className={s.textarea}></textarea>
            <label htmlFor="Status" className={s.label}>Статус:</label>
            <select name="" id="Status" onChange={onStatusChanged} className={s.select}>
                <option value="Не начата">Не начата</option>
                <option value="В процессе">В процессе</option>
                <option value="Завершена">Завершена</option>
            </select>
            <button type="submit" disabled={text.trim()===""}className={s.button}>Save</button>
        </form>
    )
}

export default NewTaskForm;