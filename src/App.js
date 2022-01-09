import './App.css';
import { StreamChart } from 'stream-chat';
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";

const apiKey = 'aq9zturtpmkk';

const client = StreamChart.getClient(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <h1>Chat Application</h1>
      <Chat client={client} theme={"team dark"}>

      </Chat>
    </div>
  );
}

export default App;
