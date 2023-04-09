import React, { useEffect, useMemo, useState } from "react";
import st from "./style.module.scss";

export default function TableRow({ item }) {
  const [isEdit, setIsEdit] = useState(true);
  const { word, transcription, translate } = item;
  const [defaultValue, editDefaultValue] = useState({});

  useEffect(() => {
    editDefaultValue({
      word: item.word,
      transcription: item.transcription,
      translate: item.translate,
    });
  }, []);

  const getEditWord = () => {
    setIsEdit(!isEdit);
  };
  const saveWord = (e) => {
    if (e.target.value == " ") {
      console.log("error");
    } else {
      setIsEdit(!isEdit);
    }
  };

  const handleChange = (e) => {
    editDefaultValue({
      ...defaultValue,
      [e.target.name]: e.target.value.toLowerCase(),
    });
  };

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
          <input
            className={st.word}
            value={defaultValue.word}
            onChange={handleChange}
          />
          <input
            className={st.transcription}
            value={defaultValue.transcription}
            onChange={handleChange}
          />
          <input
            className={st.translate}
            value={defaultValue.translate}
            onChange={handleChange}
          />
          <div className={st.wrap_btn}>
            <button onClick={saveWord}>Save</button>
          </div>
        </>
      )}
    </div>
  );
}
