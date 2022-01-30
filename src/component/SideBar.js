import React from 'react';
import Cookies from "universal-cookie";
import logoutIcon from './assets/image/logout.png';

import chatIcon from './assets/image/mychat.png';

const cookies = new Cookies();

const SideBar = () => {

  const logout = () => {

    cookies.remove('token');
    cookies.remove('id');
    cookies.remove('fullName');
    cookies.remove('hashedPassword');
    cookies.remove('phoneNumber');
    cookies.remove('avatarUrl');

    window.location.reload();
  }

  return (
      <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
          <div className="icon1__inner">
            <img src={chatIcon} alt="MayChat" width="30"/>
          </div>
        </div>
        <div className="channel-list__sidebar__icon2">
          <div className="icon2__inner" onClick={logout}>
            <img src={logoutIcon} alt="Log out" width="30"/>
          </div>
        </div>
      </div>
  );
};

export default SideBar;