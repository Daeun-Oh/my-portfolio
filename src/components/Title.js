import React from "react";

const Title = ({ name, lan, size = 24, color = "#000" }) => {
  return (
    <h1
      className={lan === "eng" ? "sacramento-regular" : "hssantoki20"}
      style={{
        fontSize: `${size}px`,
        color,
        margin: 0,
        marginBottom: 10,
      }}
    >
      {name}
    </h1>
  );
};

export default React.memo(Title);
