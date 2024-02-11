import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture";
const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: "Gen AI",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
   
  },
  widgets: [
    {
      widgetName: 'dogPicture',
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
};

export default config;
