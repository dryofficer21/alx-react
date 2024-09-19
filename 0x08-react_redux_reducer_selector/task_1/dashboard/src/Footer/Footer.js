import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';
import { AppContext } from '../App/AppContext'


const Footer = () => {
  const { user } = React.useContext(AppContext);
  return (
    <div className="App-footer">
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      {user.isLoggedIn && (
        // eslint-disable-next-line
        <p><a href='#'>Contact us</a></p>
      )}
    </div>
  )
}

export default Footer;