import React from "react";
import { Principal } from "./pages/Principal";
import { Produto } from "./pages/Produto";
import { Carrinho } from "./pages/Carrinho"
import {carrosseis,produto,filtro} from "./data.json"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Principal carrosseis={carrosseis} produto={produto} filtro={filtro}/>}/>
                <Route path="/produto/:id" element={<Produto/>}/>
                <Route path="/carrinho" element={<Carrinho produto={produto}/>}/>
            </Routes>
        </Router>
    );
}

export default App;