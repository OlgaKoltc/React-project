import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
// import Logo from "../../components/Logo/Logo";
import { Table, Game } from "../index";
import st from "./style.module.scss";
import logo from "../../style/img/logo.svg";

function App() {
  return (
    <Router>
      <div className={st.container}>
        <header>
          <NavLink to="/">
            <img src={logo} width={70} height={70} />
          </NavLink>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/game">Game</NavLink>
        </header>
        <div className={st.main}>
          <Routes>
            <Route path="/" element={<Table />} />
          </Routes>
          <Routes>
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
        <footer>
          <p>footer</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
