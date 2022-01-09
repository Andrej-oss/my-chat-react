import React from 'react';

import chatIcon from './assets/image/mychat.png';
import logoutIcon from './assets/image/logout.png';

const SideBar = () => {
  return (
      <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
          <div className="icon1__inner">
            <img src={chatIcon} alt="MayChat" width="30"/>
          </div>
        </div>
        <div className="channel-list__sidebar__icon2">
          <div className="icon2__inner">
            <img src={logoutIcon} alt="Log out" width="30"/>
          </div>
        </div>
      </div>
  );
};

export default SideBar;