import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import "./App.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie/index";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movie/:id" component={Movie} exact />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
