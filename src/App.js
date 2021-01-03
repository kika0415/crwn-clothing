import { Switch, Route } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepageComponent";
import ShopPage from "./pages/shop/shopComponent";
import Header from "./components/header/headerComponent";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
