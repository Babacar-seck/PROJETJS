import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './Routes';
import PanierContext from './context/PanierContext'



function App() {
  const [panier, setPanier] = useState([])
  const panierContextValues = {
    panier: panier,
    setPanier: setPanier,
  }
  return (
    <Router>
      <PanierContext.Provider value={ panierContextValues }>
        <Layout>
          <Routes />
        </Layout>
      </PanierContext.Provider>
    </Router>
  );
}

export default App;
