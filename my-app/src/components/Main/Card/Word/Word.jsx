import React from 'react';
import st from './Word.module.scss';

export default function word(props) {
  return (
    <div className={st.word}>{props.word}</div>
  )
}
