import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import DeleteTodo from "./components/delete-todo.components";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="todo" target="_blank">
              <img src={logo} width="30" height="30" alt="todo" />
            </a>
            <Link to="/" className="navbar-brand">Welcome to TODO-APP</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
               
              </ul>
            </div>
            <div className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
            </div>

          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/delete/:id" component={DeleteTodo} />
        </div>
      </Router>
    );
  }
}export default App;
