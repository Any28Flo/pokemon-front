import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";

import routes from "../helpers/routes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />}>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
