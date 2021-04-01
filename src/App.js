import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import { useSelector } from 'react-redux'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'

function App() {
  const student = useSelector((state) => state.student.isLogged)
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {student ? <Home /> : <Redirect to="/login"/>}
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
