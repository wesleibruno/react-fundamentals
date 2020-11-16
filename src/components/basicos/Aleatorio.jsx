/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  // let max = props.max
  // let min = props.min
  const { min, max } = props;
  const aleatorio = Math.floor(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Valor aleatório</h2>
      <p>
          <strong>Valor Mínimo: </strong>{min}
      </p>
      <p>
          <strong>Valor Máximo: </strong>{max}
      </p>
      <p>
          <strong>Valor Escolhido: </strong>{aleatorio}
      </p>
    </div>
  );
}
