import React from 'react';
import { ChannelList } from "stream-chat-react";

import { ChannelSearch, Header, SideBar, TeamChannelList, TeamChannelPreview } from "./index";

const ChannelListContainer = () => {
  return (
      <div className="channel-list__container">
        <SideBar/>
        <div className="channel-list__list__wrapper">
          <Header/>
          <div>
            <ChannelSearch/>
            <ChannelList
                filter={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                <TeamChannelList {...listProps} type="team"/>)}
                Preview={(preview) => (
                    <TeamChannelPreview {...preview} type="team"/>
                )}/>
            <ChannelList
                filter={{}}
                channelRenderFilterFn={() => {}}
                List={(listProps) => (
                    <TeamChannelList {...listProps} type="messaging"/>)}
                Preview={(preview) => (
                    <TeamChannelPreview {...preview} type="messaging"/>
                )}/>
          </div>
        </div>
      </div>
  );
};

export default ChannelListContainer;