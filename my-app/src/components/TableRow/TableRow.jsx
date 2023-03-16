import React, { useState } from "react";
import st from "./style.module.scss";

export default function TableRow({ item }) {
  const [isEdit, setIsEdit] = useState(true);
  const { word, transcription, translate } = item;

  function getEditWord() {
    setIsEdit(!isEdit);
  }

  return (
    <div className={st.container_row}>
      {isEdit ? (
        <>
          <div className={st.word}>{word}</div>
          <div className={st.transcription}>{transcription}</div>
          <div className={st.translate}>{translate}</div>
          <div className={st.wrap_btn}>
            <button onClick={getEditWord}>Edit</button>
          </div>
        </>
      ) : (
        <>
          <input className={st.word} defaultValue={word} />
          <input className={st.transcription} defaultValue={transcription} />
          <input className={st.translate} defaultValue={translate} />
          <div className={st.wrap_btn}>
            <button onClick={getEditWord}>Save</button>
          </div>
        </>
      )}
    </div>
  );
}
