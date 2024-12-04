import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListarClientesComponent from './components/ListarClientesComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CrearClienteComponent from './components/CrearClienteComponent';
import VerClienteComponent from './components/VerClienteComponent';

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Routes>
                        {/* Using element instead of component */}
                        <Route path="/" element={<ListarClientesComponent />} />
                        <Route path="/clientes" element={<ListarClientesComponent />} />
                        <Route path="/add-cliente/:id" element={<CrearClienteComponent />} />
                        <Route path="/view-cliente/:id" element={<VerClienteComponent />} />
                    </Routes>
                </div>
                <FooterComponent />
            </Router>
        </div>
    );
}

export default App;
