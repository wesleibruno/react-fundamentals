/* eslint-disable import/no-anonymous-default-export */
import './Card.css'
import React from "react";

 
export default (props) => {
  
  const cardStyle = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00'
  } 

  return (
    ///////////////////////////////////////////////
    // <div className="Card" style={{           ///
    //   backgroundColor: props.color || '#F00',// poderia ser o conteudo da variavel direto no style mas por questao
    //   borderColor: props.color || '#F00'    ///de organização foi feito da forma abaixo
    // }}>                                    /// 
    /////////////////////////////////////////////
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">
        {props.children}
      </div>
    </div>
  );
};
