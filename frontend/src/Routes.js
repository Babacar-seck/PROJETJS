import { Route, Switch } from "react-router-dom"
import Femmes from "./pages/Femmes"
import Hommes from "./pages/Hommes"
import Enfants from "./pages/Enfants"
import Accueil from "./pages/Accueil"

import Login from './pages/Login'
//Avec le lazy loading

const Routes = () => {
    return (
            <Switch>
                <Route path="/hommes">
                   <Hommes/>
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