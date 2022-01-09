import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer, ChannelListContainer } from "./component/index";

const apiKey = 'aq9zturtpmkk';

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme={"team dark"}>
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
      <h1>My Chat Application</h1>
    </div>
  );
}

export default App;
