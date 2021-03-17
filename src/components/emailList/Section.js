import React from "react";
import "./Section.scss";

function Section({ Icon, title, color, selected }) {
  return (
    <div
      className={`Section ${selected && "Section-selected"}`}
      style={{
        borderBottom: `1px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4 className="Section-title">{title}</h4>
    </div>
  );
}

export default Section;
