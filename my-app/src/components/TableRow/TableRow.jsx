import React from "react";
import st from "./style.module.scss";

export default function TableRow({ item }) {
  const { word, transcription, translate } = item;

  const flag = false;

  return (
    <div className={st.container_row}>
      {flag == true ? (
        <>
          <div className={st.word}>{word}</div>
          <div className={st.transcription}>{transcription}</div>
          <div className={st.translate}>{translate}</div>
        </>
      ) : (
        <>
          <input className={st.word} defaultValue={word} />
          <input className={st.transcription} defaultValue={transcription} />
          <input className={st.translate} defaultValue={translate} />
        </>
      )}
      <div className={st.wrap_btn}>
        <button>Edit</button>
      </div>
    </div>
  );
}
