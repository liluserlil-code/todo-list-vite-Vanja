import {type ChangeEvent, type ReactElement } from "react";
import s from "./dropdownList.module.css"
type Props = {
    onStatusChanged: (event: ChangeEvent<HTMLSelectElement>) => void;
    status?:string
}

const DropdownList = ({onStatusChanged, status}:Props): ReactElement => {
    
    return(
        <select name="" id="Status" onChange={onStatusChanged} className={s.select} defaultValue={!status ? "" : status}>
            <option value="Не начата">Не начата</option>
            <option value="В процессе">В процессе</option>
            <option value="Завершена">Завершена</option>
        </select>
    )
}

export default DropdownList;