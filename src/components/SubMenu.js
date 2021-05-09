import React, { useState } from 'react';

import styled from 'styled-components';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

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
