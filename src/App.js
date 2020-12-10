import { Route, BrowserRouter as  Router, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
