import './App.css';
import { StreamChat } from 'stream-chat';
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { Auth, ChannelContainer, ChannelListContainer } from "./component/index";

const apiKey = 'aq9zturtpmkk';

const client = StreamChat.getInstance(apiKey);

const cookies = new Cookies();

const token = cookies.get('token');

function App() {
  if (token) {
    client.connectUser({
      id: cookies.get('id'),
      fullName: cookies.get('fullName'),
      hashedPassword: cookies.get('hashedPassword'),
      phoneNumber: cookies.get('phoneNumber'),
      avatarUrl: cookies.get('avatarUrl')
    }, token);
  }
  if (!token) return <Auth/>;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme={"team dark"}>
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
