import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App.js'


 function Router() {
    return (
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<App />}></Route>
             
            </Routes>
        </BrowserRouter>
    );
}
export default Router;