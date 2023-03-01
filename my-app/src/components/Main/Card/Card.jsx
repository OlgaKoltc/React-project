import React from 'react';
import Word from './Word/Word';
import data from '../../../wordsList.json';
import st from './Card.module.scss'

export default function Сard(props) {
  return (
    <div className={st.content} >      {
      data.map((word) => (
        <Word theme={data.theme}>{props.theme}</Word>
      ))
   }
   </div>
  )
}
