import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Movie } from './pages/Movie/index';


function App() {
  return (
    <div className="App">
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/movie/:id" component={Movie} exact/>
          </Switch>
    </div>
  );
}

export default App;
