import { useNavigate } from "react-router-dom";
import s from "./buttonTo.module.css"
import type { ReactElement } from "react";

type Props = {
    path: string;
    text: string;
}

const ButtonTo = ({path, text} :Props):ReactElement => {
    const navigation = useNavigate();

    const onClick = () => {
        navigation(path);
    }


    return(
        <button onClick={onClick} className={s.button}>{text}</button>
    )

}

export default ButtonTo;