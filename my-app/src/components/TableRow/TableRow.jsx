import React, { useEffect, useMemo, useState } from "react";
import st from "./style.module.scss";

export default function TableRow({ item }) {
  const [isEdit, setIsEdit] = useState(true);
  const { english, transcription, russian, id } = item;
  const [valueImput, setValueImput] = useState();
  const [words, setWords] = useState({});
  const [err, setErr] = useState("error");

  const getEditWord = () => {
    setIsEdit(!isEdit);
  };

  useEffect(() => {
    setWords({
      english: item.english,
      transcription: item.transcription,
      russian: item.russian,
    });
  }, []);

  function saveWord() {
    const input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++) {
      const thisInput = input[i];

      if (thisInput.value == "") {
        setErr(thisInput.classList.add(err));
        setIsEdit(isEdit);
        console.log(thisInput);
      } else {
        setIsEdit(!isEdit);
        getWord();
      }
    }
  }

  function handleChange(event) {
    setValueImput(event.target.value);
  }

  //тут была идея добавить в массив откорректированное слово из импута
  const getWord = () => {
    let wordValue = valueImput;
    setValueImput(wordValue);
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
