import React, { useEffect, useState } from 'react';
import { Chat, ChatList } from '../components';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { colors } from '../theme';

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

  const chats = [
    { _id: 1,
      name: 'Chat1', 
      avatar: 'https://steamuserimages-a.akamaihd.net/ugc/759346451812931511/D878648B294DA2B94D18893BF363C9084BA1D8F1/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
      lastMessage: messages[0],
    },
    { _id: 2,
      name: 'Chat2',
      avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fqqa16cl4wbd21.png&f=1&nofb=1',
    },
    { _id: 3,
      name: 'Chat3',
      avatar: 'https://st2.depositphotos.com/1009634/7235/v/950/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg',
    },
    { _id: 4,
      name: 'Chat4',
      avatar: 'https://www.neurosciencemarketing.com/wp-content/uploads/2016/08/mona-lisa.jpg',
    },
    
  ];

  const [aspectRatio, setAspectRatio] = useState(Dimensions.get('window').width / Dimensions.get('window').height);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window }) => {
        setAspectRatio( window.width / window.height );
      }
    );
    return () => subscription?.remove();
  });

  const [mobileShowChat, setMobileShowChat] = useState(false);// show chatList if false
  
  const openChat = (_id) => {
    if (_id == 1) {
      setMobileShowChat(true)
    } else {
      alert(`open Chat with id ${_id}`)
    }
  }

  const renderChatList = () => (
    <ChatList
      chats={chats}
      openChat={openChat}
    />
  )

  const renderChat = () => (
    <Chat
      sendMessage={sendMessage}
      messages={messages}
      currentUser={u1}
    />
  )

  const renderHeader = () => (
    <View style={{
      padding: 5,
      backgroundColor: colors.itemBgColor,
      color: colors.itemFontColor,
    }}>
      <TouchableOpacity onPress={() => setMobileShowChat(false)}>
        <IoMdArrowRoundBack size='35'/>
      </TouchableOpacity>
    </View>
  )

  if (aspectRatio > 1) {
    return (
      <View style={{
        position: 'absolute',
        inset: '0 0 0 0',// fullscreen
        display: 'grid',
      }}>
        <View style={{'grid-column': '1 / 2'}}>
          {renderChatList()}
        </View>
        <View style={{'grid-column': '2 / 6'}}>
          {renderChat()}
        </View>
      </View>
    )
  }
  if (mobileShowChat) {
    return (
      <View style={{
        position: 'absolute',
        inset: '0 0 0 0',// fullscreen
        backgroundColor: colors.itemBg,
      }}>
        {renderHeader()}
        {renderChat()}
      </View>
    )
  }
  return (
    <View style={{
      position: 'absolute',
      inset: '0 0 0 0',// fullscreen
    }}>
      {renderChatList()}
    </View>
  )
}

export default ChatPage;