import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router ,  Switch , Route} from 'react-router-dom'
import Login from './Components/Login/login';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'; 
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/home">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
