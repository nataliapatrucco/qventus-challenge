import React from "react";
import { ChangeEvent, useState } from "react";
import Item from "./Item";

interface Props {
  options: { message: string; validation: (password: string) => boolean }[];
}

const Validation = ({ options }: Props) => {
  const [password, setPassword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const validationItems = options.map(({ validation, ...rest }, index) => ({
    key: index,
    success: validation(password),
    ...rest,
  }));

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        onChange={handleChange}
        type="password"
      />
      <ul style={{ listStyle: "none", padding: "0px" }}>
        {validationItems.map(({key, success, message}) => (
          <Item
            key={key}
            success={success}
            message={message}
          />
        ))}
      </ul>
    </div>
  );
};

export default Validation;
