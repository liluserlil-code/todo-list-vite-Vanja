//import ButtonSave from "./components/ButtonSave";
import "./components/AddNew.css"
import { useNavigate } from "react-router-dom";

const AddNew = () => {
    
    const navigate = useNavigate();

    const Click = () =>{
        navigate("/")
    }

    return(
        <>
            <header>
                <h1>
                    Add new task
                </h1>
            </header>
            <form action="">
                <textarea placeholder="Add a new task..."></textarea>
                <label htmlFor="Status">Статус</label>
                <select name="" id="Status" >
                    <option value="">Не начата</option>
                    <option value="">В процессе</option>
                    <option value="">Завершена</option>
                </select>
                <button onClick={Click}>Save and return to main page</button>
            </form>
        </>
    )
}

export default AddNew;