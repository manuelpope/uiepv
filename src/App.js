import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {


  return (
    <Router>
      <div>


        <Switch>
          <Route exact path='/' component={Home}></Route>


        </Switch>



      </div>
    </Router>

  );
}

export default App;

