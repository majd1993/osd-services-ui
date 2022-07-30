import './App.css';
// importing components from react-router-dom package
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from './login-page/login-page';
import ToDoListPage from './to-do-list-page/to-do-list-page';

function App() {
  return (
    <div className="App">
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for LoginPage component with exact path "/", in component props we passes the imported component*/}
          <Route exact path="/" element={<LoginPage />} />
          {/* This route is for ToDoListPage component with exact path "/ToDoListPage", in component props we passes the imported component*/}
          <Route path="/todolist" element={<ToDoListPage />} />
          {/* If any route mismatches the upper route endpoints then, redirect triggers and redirects app to home component with to="/" */}
          {/*  <Navigate to="/" /> */}
        </Routes >
      </Router>
    </div>
  );
};

export default App;