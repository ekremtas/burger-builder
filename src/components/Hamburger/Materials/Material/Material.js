import React from "react";

const Material = (props) => {
  const { malzeme } = props;
  return (
    <div
      className={"materials"}
      style={{
        backgroundColor: malzeme.color,
      }}
    >
      {malzeme.name}
      {/* {malzeme.count} */}
    </div>
  );
};

export default Material;
