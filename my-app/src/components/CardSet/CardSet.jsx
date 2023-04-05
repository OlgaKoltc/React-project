import React, { useState, useEffect } from "react";
import word from "../../wordsList.json";
import Card from "../Card/Card";
import st from "./style.module.scss";

export default function CardSet() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  //useEffect(() => (onChangeCard(), [count]));

  const handleCount = () => setQuantity((quantity) => quantity + 1);

  function handlePrev() {
    {
      if (count > 0) {
        setCount((count - 1) % word.length);
      } else {
        setCount(word.length - 1);
      }
    }
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
          <Card card={word[count]} count={quantity} handleCount={handleCount} />
        </div>
        <button className={st.card_btn} onClick={handleNext}>
          Вперед
        </button>
      </div>
      <div className={st.card_count}>выученных слов: {quantity} шт</div>
    </>
  );
}
