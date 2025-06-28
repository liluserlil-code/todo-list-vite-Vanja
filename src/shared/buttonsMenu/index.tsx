import s from "./buttonsMenu.module.css"
import ButtonTo from "../buttonTo";
import type { ReactElement } from "react";

const ButtonsMenu = ():ReactElement => {
    return(
        <div className={s.buttonsMenu}>
            <ButtonTo path={"/add-new"} text={"Add new task"}/>
            <ButtonTo path={"/json-placeholder"} text={"JSON Placeholder"}/>
        </div>
    )
}

export default ButtonsMenu;