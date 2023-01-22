import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App.js'
import Tracker1 from '../components/views/trakers/traker-1';
import Tracker2 from '../components/views/trakers/traker-2';
import Tracker3 from '../components/views/trakers/traker-3';
import Tracker4 from '../components/views/trakers/traker-4';

 function Router() {
    return (
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<App />}/>
             <Route path="/trackerApp/" element={<trackerApp/>}/>
             { /* Ruta para obtener un mensaje de error */}    
             <Route path="*" element={<div>Error 404!! Página no encontrada</div> }/>
            </Routes>
        </BrowserRouter>
    );
}
export default Router;