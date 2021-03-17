import React from 'react';
import './SidebarOption.scss';

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`SidebarOption ${selected && 'SidebarOption-active'}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
