import "./NewTaskForm.css"
import { useNavigate } from "react-router-dom";
import { useState, type ReactHTMLElement } from "react";

const NewTaskForm = () => {
    const [textarea, setTextarea] = useState('');
    const [select, setSelect] = useState('Not');
    
    const navigate = useNavigate();

    const Click = () =>{

        navigate("/")
    }

    const TextChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextarea(event.target.value)
    }

    const SelectChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(event.target.value)
    }

    console.log(textarea)
    console.log(select)

    return(
        <form action="">
            <textarea placeholder="Add a new task..." onChange={TextChanged}></textarea>
            <label htmlFor="Status">Статус:</label>
            <select name="" id="Status" onChange={SelectChanged}>
                <option value="Not">Не начата</option>
                <option value="In">В процессе</option>
                <option value="Done">Завершена</option>
            </select>
            <button onClick={Click}>Save</button>
        </form>
    )
}

export default NewTaskForm;