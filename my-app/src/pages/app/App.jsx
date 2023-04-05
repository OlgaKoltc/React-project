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
        <header className={st.header}>
          <div className={st.nav}>
            <NavLink to="/">
              <img src={logo} width={70} height={70} />
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to="/game"
            >
              Game
            </NavLink>
          </div>
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
          <div className={st.footer__block}>
            <h4>LearnEnglish</h4>
            <p>Just learn it</p>
            <p>e-mail: LearnEnglish@gmail.com</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
