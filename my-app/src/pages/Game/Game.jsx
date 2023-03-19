import React from "react";
import CardSet from "../../components/CardSet/CardSet";
import st from "./style.module.scss";

export default function Game() {
  return (
    <div href="/Game" className={st.content}>
      <CardSet />
    </div>
  );
}
