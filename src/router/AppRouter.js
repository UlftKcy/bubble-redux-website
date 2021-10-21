import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/header/Header";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import ProductDetail from "../pages/ProductDetail";
import Basket from "../pages/Basket";

const AppRouter = () => {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/featuredProducts/:productId" component={ProductDetail}/>
        <Route path="/basket" component={Basket}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;
