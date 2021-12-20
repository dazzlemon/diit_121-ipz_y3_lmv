import React, { useState } from 'react';
import { Chat } from '../components';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatPage = () => {
  const u2 = {
    _id: 2,
    name: 'John Doe',
    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F66.media.tumblr.com%2F71bb701a109cff6608ba24bf7ef3f16e%2Ftumblr_pcchwbaHls1x72ag3o1_1280.png&f=1&nofb=1',
  };
  const u1 = {
    _id: 1,
    name: 'Robert Henry',
    avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fqqa16cl4wbd21.png&f=1&nofb=1'
  };

  const [messages, setMessages] = useState([
    { _id: 1, text: 'Hey there!', createdAt: new Date(), user: u1 },
    { _id: 2, text: 'Hello, how are you doing?', createdAt: new Date(), user: u2 },
    { _id: 3, text: 'I am good, how about you?', createdAt: new Date(), user: u1 },
    { _id: 4, text: `😊😇`, createdAt: new Date(), user: u1 },
    { _id: 5, text: `Can't wait to meet you.`, createdAt: new Date(), user: u2 },
    { _id: 6, text: `That's great, when are you coming?`, createdAt: new Date(), user: u1 },
    { _id: 7, text: `This weekend.`, createdAt: new Date(), user: u2 },
    { _id: 8, text: `Around 4 to 6 PM.`, createdAt: new Date(), user: u2 },
    { _id: 9, text: `Great, don't forget to bring me some mangoes.`, createdAt: new Date(), user: u1 },
    { _id: 10, text: `Sure!`, createdAt: new Date(), user: u2 },
    { _id: 11, text: '1', createdAt: new Date(), user: u1},
    { _id: 12, text: '2', createdAt: new Date(), user: u1},
    { _id: 13, text: '3', createdAt: new Date(), user: u1},
    { _id: 14, text: '1', createdAt: new Date(), user: u2},
    { _id: 15, text: '2', createdAt: new Date(), user: u2},
    { _id: 16, text: '3', createdAt: new Date(), user: u2},
  ].reverse());

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
  </>
  );
}

export default ChatPage;