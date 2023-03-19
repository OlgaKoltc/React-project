import React from "react";
import logo from "../../style/img/logo.svg";
import st from "./style.module.scss";

export default function Logo() {
  return (
    <div className={st.content}>
      <img src={logo} />
    </div>
  );
}
