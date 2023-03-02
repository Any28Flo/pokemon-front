import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import PokemonsGeneral from "../pages/PokemonGeneral";

import routes from "../assets/helpers/routes";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />}>
                <Route index element={<PokemonsGeneral />} />
                <Route
                    path={routes.detail}
                    element={<Detail />}
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
