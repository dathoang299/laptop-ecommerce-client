import React from 'react'
import { Link } from 'react-router-dom';
import OutlinedButton from '../OutlinedButton';

import cartIcon from '../../assets/images/cart.png';
import './RightMainHeader.scss';

function RightMainHeader() {
  return (
    <div className='RightMainHeader'>
      <Link to='#' className='RightMainHeader RightMainHeader__register'>Register</Link>
      <div className='RightMainHeader__login'>
        <OutlinedButton label='Login'>
          <Link to='/login' className=' RightMainHeader RightMainHeader__loginText'>Login</Link>
        </OutlinedButton>
      </div>
      <img src={cartIcon} alt='Cart' />
    </div>
  );
}

export default RightMainHeader;