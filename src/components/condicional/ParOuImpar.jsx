/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import React from "react";

export default (props) => {
  const isPar = props.numero % 2 === 0;
  return <div>{isPar ? <span>Par</span> : <span>Impar</span>}</div>;
};
