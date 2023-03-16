import React, { useState } from "react";
import word from "../../wordsList.json";
import Card from "../Card/Card";
import st from "./style.module.scss";

export default function CardSet() {
  const [count, setCount] = useState(0);

  function handlePrev() {
    setCount((count - 1) % word.length);
  }

  function handleNext() {
    setCount((count + 1) % word.length);
  }

  return (
    <>
      <div className={st.container_card} key={count}>
        <button className={st.card_btn} onClick={handlePrev}>
          Назад
        </button>
        <div className={st.card_word}>
          <Card card={word[count]} count={count} key={count} />
        </div>
        <button className={st.card_btn} onClick={handleNext}>
          Вперед
        </button>
      </div>
    </>
  );
}
