import React from 'react';
import data from '../../../wordsList.json';
import st from '../TableWords/Table.module.scss'

export default function Table() {
  return (
    <div className={st.content}>
        <table>
            <thead>
                <tr>
                    <th>Слово</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th>
                        {/* <button className={st.save}/>
                        <button className={st.edit}/>
                        <button className={st.delete}/> */}
                    </th>
                </tr>
                <React.Fragment>
                    
                </React.Fragment>
            </thead>
        </table>
    </div>
  )
}
