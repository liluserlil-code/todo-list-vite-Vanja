import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddNew from "../pages/addNew";
import Edit from "../pages/editTask";
import TasksList from "../pages/mainPage";
import type { ReactElement } from "react";

const AppRouter = (): ReactElement => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<TasksList/>}></Route>
                <Route path="/edit" element={<Edit/>}></Route>
                <Route path="/add-new" element={<AddNew/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter