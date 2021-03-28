import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import AutocompleteSearch from '../AutocompleteSearch';

import './TopHeader.scss';
import logoImage from '../../assets/images/logo.png';

function TopHeader(props) {
  const {
    categoryMenu,
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
      <div className='TopHeader__mainHeader'>
        <img src={logoImage} alt='Logo' />
        <AutocompleteSearch />
        <Link to="/login">
          <span>Register</span>
        </Link>
      </div>
    )
  };

  const renderMenuList = () => (
    <ul>
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
  );

  return (
    <div className='TopHeader'>
      {renderMainHeader()}
      {renderMenuList()}
    </div>
  )
}

export default TopHeader;