import React, { useEffect, useMemo, useState } from "react";
import st from "./style.module.scss";

export default function TableRow({ item }) {
  const [isEdit, setIsEdit] = useState(true);
  const { english, transcription, russian, id } = item;
  const [valueImput, setValueImput] = useState();
  const [word, setWord] = useState([]);

  const getEditWord = () => {
    setIsEdit(!isEdit);
  };

  function saveWord() {
    if (valueImput == "") {
      //el.classList.add("error");
      console.log("error"); //не знаю как добавить красную рамку конкретному импуту
    } else {
      setIsEdit(!isEdit);
      getWord();
    }
  }

  function handleChange(event) {
    setValueImput(event.target.value);
  }

  //тут была идея добавить в массив откорректированное слово из импута
  const getWord = () => {
    let wordValue = valueImput;
    let words = [...word, wordValue];
    setWord(words);
    console.log(words);
  };

  return (
    <div className={st.container_row}>
      {isEdit ? (
        <>
          <div className={st.word}>{english}</div>
          <div className={st.transcription}>{transcription}</div>
          <div className={st.translate}>{russian}</div>
          <div className={st.wrap_btn}>
            <button onClick={getEditWord}>Edit</button>
          </div>
        </>
      ) : (
        <>
          <input
            type="text"
            className={st.word}
            defaultValue={english}
            onChange={handleChange}
          />
          <input
            type="text"
            className={st.transcription}
            defaultValue={transcription}
            onChange={handleChange}
          />
          <input
            type="text"
            className={st.translate}
            defaultValue={russian}
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
