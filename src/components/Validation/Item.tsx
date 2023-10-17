import React from "react";

interface Props {
  success: boolean;
  message: string;
}
const Item = ({ success, message }: Props) => {
  const iconContent = success ? "✔" : "x";
  const spanStyle = {
    backgroundColor: success ? "green" : "red",
    color: "white",
    padding: "2rem",
    clipPath: "circle(20%)",
  };

  return (
    <li style={{marginBottom: '1rem'}}>
      <span style={spanStyle}>{iconContent}</span>
      {message}
    </li>
  );
};

export default Item;
