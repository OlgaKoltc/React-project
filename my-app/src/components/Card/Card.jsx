import React, { useState } from "react";
import st from "./style.module.scss";

export default function Card({ card }, count) {
  const { word, transcription, translate, theme, id } = card;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={st.animation}>
      <div className={st.container_card}>
        <div className={st.theme}>{theme}</div>
        <div className={st.word}>{word}</div>
        <div className={st.transcription}>{transcription}</div>
        {checked ? (
          <div className={st.card__checked}>
            <div className={st.translate}>{translate}</div>
          </div>
        ) : (
          <button className={st.card_btn} onClick={handleChange}>
            Проверить
          </button>
        )}
      </div>
    </div>
  );
}
