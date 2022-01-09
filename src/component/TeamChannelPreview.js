import React from 'react';
import { useChatContext, Avatar } from "stream-chat-react";

const TeamChannelPreview = ({ channel, type }) => {
  const { channel: activeChannel, client } = useChatContext();

  const ChannelPreview = () => {
    return (
        <p className="channel-preview__item">
          # {channel && (channel.data.name || channel.data.id) }
        </p>
    )
  };
  const DirectPreview = () => {
    let members = [];
    if (channel && channel.state) {
      members = Object.values(channel.state.members).filter( ({ user }) => user.id !== client.userID);
    }
    return (
        <div className="channel-preview__item single">
          {members.length && members[0].user &&
              <Avatar
              image={members[0].user.image}
              name={members[0].user.fullName}
              size={24}/> && <p>{members[0].user.fullName}</p>}
        </div>
    )
  }
  return (
      <div>
        {channel && activeChannel &&
            <div className={channel.id === activeChannel.id
                            ? "channel-preview__wrapper__selected"
                            : "channel-preview__wrapper"}
            onClick={() => {
              console.log(channel);
            }}>

            </div>}
        {type === "team" ? <ChannelPreview/> : <DirectPreview/>}
      </div>
  );
};

export default TeamChannelPreview;