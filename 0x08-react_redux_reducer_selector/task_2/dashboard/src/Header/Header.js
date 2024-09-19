import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from "aphrodite";
import { AppContext } from '../App/AppContext';


const Header = () => {
  const { user, logOut } = React.useContext(AppContext);
  return (
    <>
      <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt="logo" />
          <h1>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
                <section className={css(styles.welcome)} id="logoutSection">
                    Welcome<strong> {user.email} </strong>
                    <em>
                      {/* eslint-disable-next-line */}
                        <a href="#" onClick={logOut}>
                            (logout)
                        </a>
                    </em>
                </section>
            )}
    </>
  )
}

const styles = StyleSheet.create({
  AppHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '3px solid #c1384c',
    color: '#c1384c',
  },

  AppLogo: {
    width: '200px',
    height: 'auto',
  },
  welcome: {
    marginTop: '20px',
    marginLeft: '20px'
}
})
export default Header;