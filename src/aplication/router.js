import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App.js'

 function Router() {
    return (
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<App />}></Route>
             <Route path="/TrackerApp" element={<TrackerApp />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;
