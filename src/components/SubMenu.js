import React, { useState } from 'react';

import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const SubMenu = ({ link, subLinks }) => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="menu-item" onClick={toggleSubMenu}>
      {link}
      {showSubMenu ? <FaAngleUp /> : <FaAngleDown />}
      <ul className={`${showSubMenu ? 'open' : 'closed'}`}>
        {subLinks.map((subLink) => {
          return (
            <li key={subLink.id}>
              <a href="#">{subLink.subLink}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubMenu;
