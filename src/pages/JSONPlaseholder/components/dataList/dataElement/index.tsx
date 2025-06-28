import type { ReactElement } from "react";
import s from "./dataElement.module.css"
type Props = {
    title: string;
    completed: boolean
}

const DataElement = ({title, completed}:Props):ReactElement => {
    return(
        <div className={s.dataElement}>
            <p className={s.title}>{title}</p>
            <p className={s.completed}>{completed ? '✅ Done' : '❌ Not done'}</p>
        </div>
    )
}

export default DataElement;