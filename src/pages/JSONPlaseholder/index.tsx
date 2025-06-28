import { Fragment } from "react/jsx-runtime"
import Header from "../../shared/header";
import type { ReactElement } from "react";
import DataList from "./components/dataList";

const JSONPlaceholder = ():ReactElement => {
    return(
        <Fragment>
            <Header text={"JSONPlaceholder"}/>
            <DataList/>
        </Fragment>
    )    
}

export default JSONPlaceholder;