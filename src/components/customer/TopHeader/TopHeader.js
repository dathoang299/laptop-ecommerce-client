import React from 'react'
import { NavLink } from 'react-router-dom';

import AutocompleteSearch from '../../common/AutocompleteSearch';
import RightMainHeader from '../../components/RightMainHeader';

import './TopHeader.scss';
import logoImage from '../../assets/images/logo.png';

function TopHeader(props) {
  const {
    categoryMenu = [],
  } = props;

  const menuList = [
    {
      text: 'Home',
      url: '/homepage',
      onClick: () => { },
    },
    ...categoryMenu,
  ];

  const handleClickMenuItem = (item) => item.onClick && item.onClick();

  const renderMainHeader = () => {
    return (
      <div className='TopHeader__main'>
        <img src={logoImage} alt='Logo' />
        <AutocompleteSearch />
        <div className='TopHeader__right'>
          <RightMainHeader />
        </div>
      </div>
    )
  };

  const renderMenuList = () => (
    <>
      <ul className='TopHeader__menuList'>
        {menuList.map((item) => (
          <li
            key={item.text}
            className='TopHeader__menuItem'
          >
            <NavLink
              to={item.url}
              onClick={() => handleClickMenuItem(item)}
              isActive={item.isActive}
            >
              <span>{item.text}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='clear'></div>
    </>
  );

  return (
    <div className='TopHeader'>
      {renderMainHeader()}
      {renderMenuList()}
    </div>
  )
}

export default TopHeader;