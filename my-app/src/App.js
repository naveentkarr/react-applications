import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './login/login';
export const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route path='/login' component={Login}/>
      
    </Switch>
  </main>
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Link to='/login'>Login</Link>
      </div>
    );
  }
}

export default App;
