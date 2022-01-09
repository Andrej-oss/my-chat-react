import React, { useState } from 'react';

import searchIcon from './assets/image/search.png';

const ChannelSearch = () => {
  const [nameChannel, setNameChannel] = useState('');
  const [loading, setLoading] = useState(false);

  const getChannels = async (nameChannel) => {
    try {

    } catch (e) {
      setNameChannel('');
    }
  }

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setNameChannel(event.target.value);
    getChannels(nameChannel);
  }
  return (
      <div className="channel-search__container">
        <div className="channel-search__input__wrapper">
          <div className="channel-search__input__icon">
            <img src={searchIcon} alt="search" height="20"/>
          </div>
          <input type="text"
              className="channel-search__input__text"
              placeholder="search channel"
              value={nameChannel}
              onChange={onSearch}/>
        </div>
      </div>
  );
};

export default ChannelSearch;