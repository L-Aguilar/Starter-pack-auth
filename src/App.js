import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";

import Login from './pages/login/Login';
import Register from './pages/login/Register';
import PrivateRoute from "./rutas/PrivateRoute";
import PublicRoute from "./rutas/PublicRoute";

import './scss/main.scss';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
        <Switch>
          <PublicRoute restricted={false} component={Login} path="/" exact />
          <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PublicRoute restricted={true} component={Register} path="/register" exact />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
