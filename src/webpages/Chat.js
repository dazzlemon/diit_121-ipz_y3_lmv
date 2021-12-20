import React, { useState } from 'react';
import { Chat } from '../components';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatPage = () => {
  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://facebook.github.io/react/img/logo_og.png',
      },
    },
  ]);
  
  // const [messages, setMessages] = useState([
  //   { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
  //   {
  //     sender: 'Robert Henry',
  //     message: 'Hello, how are you doing?',
  //     time: '6:02 PM',
  //   },
  //   {
  //     sender: 'John Doe',
  //     message: 'I am good, how about you?',
  //     time: '6:02 PM',
  //   },
  //   {
  //     sender: 'John Doe',
  //     message: `😊😇`,
  //     time: '6:02 PM',
  //   },
  //   {
  //     sender: 'Robert Henry',
  //     message: `Can't wait to meet you.`,
  //     time: '6:03 PM',
  //   },
  //   {
  //     sender: 'John Doe',
  //     message: `That's great, when are you coming?`,
  //     time: '6:03 PM',
  //   },
  //   {
  //     sender: 'Robert Henry',
  //     message: `This weekend.`,
  //     time: '6:03 PM',
  //   },
  //   {
  //     sender: 'Robert Henry',
  //     message: `Around 4 to 6 PM.`,
  //     time: '6:04 PM',
  //   },
  //   {
  //     sender: 'John Doe',
  //     message: `Great, don't forget to bring me some mangoes.`,
  //     time: '6:05 PM',
  //   },
  //   {
  //     sender: 'Robert Henry',
  //     message: `Sure!`,
  //     time: '6:05 PM',
  //   },
  // ]);

  function getTime(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  const sendMessage = (messages_ = []) => {
    setMessages(GiftedChat.append(messages, messages_));
  }

  return (
  <>
    <Chat
      sendMessage={sendMessage}
      messages={messages}
      currentUser={{_id: 1,}}
    />
    {/* <GiftedChat
      messages={messages}
      onSend={sendMessage}
      user={{_id: 1,}}
    /> */}
  </>
  );
}

export default ChatPage;