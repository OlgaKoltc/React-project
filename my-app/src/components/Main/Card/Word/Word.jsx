import React, { useState } from 'react';
import Backside from '../Backside/Backside';
import st from './Word.module.scss';

export default function Word(props) {
  return (
    <div className={st.content}>
      <h2 className={st.word}>{props.word}</h2>
      <Backside/>
      <button className={st.btn}>👁</button>
      </div>
  )
}
