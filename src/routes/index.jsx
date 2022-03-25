import { Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import DashboardEvents from "../pages/DashboardEvents";
import Route from "./route";

const Routes = () => {
    return(
        <AnimatePresence>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route isPrivate exact path="/dashboard" component={Dashboard} />
                <Route isPrivate exact path="/dashboard/events" component={DashboardEvents} />
            </Switch>
        </AnimatePresence>
    )
}

export default Routes