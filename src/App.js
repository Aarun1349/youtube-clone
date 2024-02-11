import "./App.css";
import "react-chatbot-kit/build/main.css";
import Header from "./components/Header";
// import Chatbot from "react-chatbot-kit";
// import config from "./chatbot/config.js";
// import MessageParser from "./chatbot/MessageParser.js";
// import ActionProvider from "./chatbot/ActionProvider.js";
// import { BsFillSendFill } from "react-icons/bs";
// import { useState } from "react";
function App() {
  // const [showChatBox, setShowChatBox] = useState(false);
  // const toggleChatBox = () => {
  //   setShowChatBox(!showChatBox);
  // };
  return <div>
    <Header/>
  </div>;
}

export default App;

// {
  /* {showChatBox && (
        <div className="chatbot">
          <Chatbot
            className="chatbot"
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            headerText="Infosys AI Bot"
          />
        </div>
      )}
      <button className="message-btn" onClick={() => toggleChatBox()}>
        <BsFillSendFill className="msg-icon" />
      </button> */
// }
