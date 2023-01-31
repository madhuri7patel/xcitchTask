import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Details from "./Components/Details";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} />
      </Provider>
    </Router>
  );
}

export default App;
