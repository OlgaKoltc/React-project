import React from 'react';
import st from '../Main/Main.module.scss';
import Card from './Card/Card';

export default function Main() {
  return (
    <div className={st.content}><Card/></div>
  )
}
