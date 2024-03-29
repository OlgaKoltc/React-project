import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { Table, Game, Logo } from "../index";
import st from "./style.module.scss";
import Banner from "../Banner/Banner";

function App() {
  return (
    <Router>
      <div className={st.container}>
        <header className={st.header}>
          <div className={st.nav}>
            <div className={st.nav__burger}>
              <span></span>
            </div>
            <NavLink to="/">
              <Logo />
            </NavLink>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to="/home"
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
            <Route path="/" element={<Banner />} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Table />} />
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
