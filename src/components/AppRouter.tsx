import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddNew from "../pages/add-new/AddNew";
import Edit from "../pages/edit/Edit";
import TasksList from "../pages/tasks-main/TasksList";
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