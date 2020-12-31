import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout/Layout';
import { BrowserRouter as Router } from "react-router-dom"
import Routes from './Routes';
import PanierContext from './context/PanierContext'
import TotalContext from './context/TotalContext'



function App() {
  const [panier, setPanier] = useState([])
  const [total, setTotal] = useState(0)
  const panierContextValues = {
    panier: panier,
    setPanier: setPanier,
  }
  const totalContextValues = {
    total: total,
    setTotal: setTotal,
  }
  return (
    <Router>
      <PanierContext.Provider value={ panierContextValues }>
        <TotalContext.Provider value={ totalContextValues }>
          <Layout>
            <Routes />
          </Layout>
        </TotalContext.Provider>
      </PanierContext.Provider>
    </Router>
  );
}

export default App;
