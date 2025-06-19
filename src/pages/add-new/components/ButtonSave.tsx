import { useNavigate } from "react-router-dom";

const ButtonSave = () =>{
    const navigate = useNavigate();

    const Click = () =>{
        navigate("/")
    }
    return(
        <button onClick={Click}>Save and return to main page</button>
    )
}

export default ButtonSave;