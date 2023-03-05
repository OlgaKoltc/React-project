import React from "react";
import word from "../../wordsList.json";
import st from "./style.module.scss";
import TableRow from "../TableRow/TableRow";

export default function Table() {
  return (
    <div>
      <div className={st.container_table}>
        {word.map((item) => (
          <TableRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
