import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChildHunger from "../components/ChildHunger";
import App from "./App";

const View = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/No-child-Hungry" exact element={<ChildHunger />} />
                <Route path="/" exact element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}

export default View;