import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/amazonpractice/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route path="/amazonpractice/login">
            <Header />
            <Login />
          </Route>
          <Route path="/amazonpractice/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
