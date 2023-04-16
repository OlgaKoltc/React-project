import React, { useContext, useEffect, useState } from "react";
import { glContext } from "../../Context/MyContext";

//import word from "../../wordsList.json";
import st from "./style.module.scss";
import TableRow from "../../components/TableRow/TableRow";

export default function Table() {
  const { data, setData } = useContext(glContext);

  return (
    <div>
      <div className={st.container_table}>
        {data.map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
