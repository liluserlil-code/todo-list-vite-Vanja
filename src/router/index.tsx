import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddNew from "../pages/addNew";
import Edit from "../pages/editTask";
import MainPage from "../pages/mainPage";
import JSONPlaseholder from "../pages/JSONPlaseholder"
import type { ReactElement } from "react";

const AppRouter = (): ReactElement => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/edit/:stringId" element={<Edit/>}></Route>
                <Route path="/add-new" element={<AddNew/>}></Route>
                <Route path="/json-placeholder" element={<JSONPlaseholder/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter