import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
