import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie/index';


function App() {
  return (
    <div className="App">
          <h2>Navbar</h2>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/movie/:id" component={Movie} exact/>
          </Switch>
    </div>
  );
}

export default App;
