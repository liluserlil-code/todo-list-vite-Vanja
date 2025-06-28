import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import s from "./dataList.module.css"
import DataElement from "./dataElement";
import type { Todo } from "../../../../domains/todo";

const DataList = ():ReactElement => {
    const [data, setData] = useState<Todo[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    return(
        <div className={s.dataList}>
            {data.map((dataEl: Todo) => (
                <DataElement key={dataEl.id} title={dataEl.title} completed={dataEl.completed}/>
            ))}
        </div>
    )
}

export default DataList;