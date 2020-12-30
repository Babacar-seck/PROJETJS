import { Route, Switch } from "react-router-dom"
import Femmes from "./pages/Femmes"
import Hommes from "./pages/Hommes"
import Enfants from "./pages/Enfants"
import Accueil from "./pages/Accueil"
import Dashboard from "./pages/Dashboard"
import Register from "./pages/Register"

import Login from './pages/Login'
import pageSolo from "./pages/pageSolo"
import Panier from "./pages/Panier"
import PanierContext from "./context/PanierContext"
//Avec le lazy loading

const Routes = () => {
    return (
        
        <Switch>
                <Route path="/hommes">
                    <Hommes />
                </Route>
                <Route path="/femmes">
                    <Femmes />
                </Route>
                <Route path="/enfants">
                    <Enfants />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
                <Route path='/inscription'>
                    <Register />
                </Route>
                <Route path='/pagesolo'>
                    <pageSolo />
                </Route>
                <Route path='/panier'>
                    <Panier />
                </Route>
                <Route path="/" exact>
                    <Accueil />
                </Route>
                <Route>
                    <p>Page introuvable 404 </p>
                </Route>

        </Switch>
    )
}

export default Routes