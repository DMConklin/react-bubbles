import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblesPage from './components/BubblePage';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => localStorage.getItem('token') ? (
    <Component {...props} />
  ) : (
    <Redirect to="/" />
  )} />
)

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubbles-page" component={BubblesPage} />
      </div>
    </Router>
  );
}

export default App;
