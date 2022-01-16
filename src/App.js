import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { Auth, ChannelContainer, ChannelListContainer } from "./component/index";

const apiKey = 'aq9zturtpmkk';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme={"team dark"}>
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
      <Auth/>
    </div>
  );
}

export default App;
