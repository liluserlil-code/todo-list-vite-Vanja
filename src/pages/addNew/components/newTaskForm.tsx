// Кароче я не знал как назвать этот файл и я назвал его контент

import s from "./NewTaskForm.module.css"
import { useNavigate } from "react-router-dom";
import { useState, type ReactElement } from "react";
import saveTaskInLS from "./saveTaskInLS";

const NewTaskForm = (): ReactElement => {
    //TODO write all types in useState
    const [text, setText] = useState<string>('');
    const [status, setStatus] = useState<string>('Не начата');

//TODO Task info store in this interface
    //TODO onTextChanged
    const onTextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)
    }
    const onStatusChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setStatus(event.target.value)
    }

    const navigate = useNavigate();

    //TODO onClick
    const handleSubmit = () => {
        if (text === "") return
        saveTaskInLS({text, status});
        navigate("/");
    }

    //TODO handle Save in onSubmit form action
    //TODO set onSubmit button disabled, if text value is empty
    return(
        <form action="" className={s.form} onSubmit={handleSubmit}>
            <textarea placeholder="Add a new task..." onChange={onTextChanged} className={s.textarea}></textarea>
            <label htmlFor="Status" className={s.label}>Статус:</label>
            <select name="" id="Status" onChange={onStatusChanged} className={s.select}>
                <option value="Не начата">Не начата</option>
                <option value="В процессе">В процессе</option>
                <option value="Завершена">Завершена</option>
            </select>
            <button type="submit" className={s.button}>Save</button>
        </form>
    )
}

export default NewTaskForm;