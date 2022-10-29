import React from "react";
import "./styles.css";

const Card = ({ producto, productoUno, productoDos }) => {
  return (
    <div>
      <p>{producto}</p>
      <p>{productoUno}</p>
      <p>{productoDos}</p>
    </div>
  );
};

export default Card;
