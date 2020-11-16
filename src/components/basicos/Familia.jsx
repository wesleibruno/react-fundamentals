/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { cloneElement } from "react";

export default (props) => {
  return (
    <div>
      {/* {React.cloneElement(props.children, props)} */}
      {/* o comentario acima é apenas para um elemento */}
      {/* //////////////////////////////////////////////////// */}
      {/* {React.Children.map(props.children, (child) => {
        return cloneElement(child, props);
      })} */}
      {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i});
      })}
    </div>
  );
};
