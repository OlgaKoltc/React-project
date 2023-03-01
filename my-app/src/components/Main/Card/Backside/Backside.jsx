import React from 'react';
import st from '../Backside/Backside.module.scss';

export default function Backside(props) {
  return (
    <div className={st.content}>
      <div className={st.backside}>
        <p>{props.transcription}</p>
        <p>{props.translate}</p>
      </div>
    </div>
  )
}
