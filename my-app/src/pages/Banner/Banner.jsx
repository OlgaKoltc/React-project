import React from "react";
// import logo from "../../style/img/logo.svg";
import st from "./style.module.scss";

export default function Banner() {
  return (
    <div>
      <div className={st.conteiner}>
        <div className={st.text}>
          <p>Рады приветсвовать вас на нашем сайте! </p>
          <p>
            Здесь вы можете изучать новые слова, используя карточки с переводом
            и транскрипцией, а так же вносить свои изменения в словарь слов!
          </p>
        </div>
      </div>
    </div>
  );
}
