import React from 'react';
import data from '../../../wordsList.json';

export default function card() {
  return (
    <div>      {
      data.map((word) => (
        <Word tema={data.tema}/>
      ))
   }
   </div>
  )
}
