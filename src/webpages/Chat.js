import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  FlatList,
  Dimensions,
  Alert,
} from 'react-native';
import { IoSend } from 'react-icons/io5';
import { IoMdMic } from 'react-icons/io';
import { AiOutlineSmile, AiOutlinePaperClip } from 'react-icons/ai';
import { colors, sizes } from '../theme';

const Chat = (props) => {
  const [isInput, setIsInput] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [linesCount, setLinesCount] = useState(1);

  return (
    <View style={styles.container}>
      <FlatList
        style={{ backgroundColor: '#1e2124' }}
        data={props.messages}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback>
            <View style={{ marginTop: 6 }}>
              <View
                style={{
                  maxWidth: Dimensions.get('screen').width * 0.8,
                  backgroundColor: '#6665d2',
                  alignSelf:
                    item.sender === props.currentUser.name
                      ? 'flex-end'
                      : 'flex-start',
                  marginHorizontal: 10,
                  padding: 10,
                  borderRadius: 8,
                  borderBottomLeftRadius:
                    item.sender === props.currentUser.name ? 8 : 0,
                  borderBottomRightRadius:
                    item.sender === props.currentUser.name ? 0 : 8,
                }}
              >
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 16,
                  }}
                >
                  {item.message}
                </Text>
                <Text
                  style={{
                    color: '#dfe4ea',
                    fontSize: 14,
                    alignSelf: 'flex-end',
                  }}
                >
                  {item.time}
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />

      <View style={{ paddingVertical: 10 }}>
        <View style={styles.messageInputView}>
          <TouchableOpacity
            style={styles.messageSendView}
          >
            <AiOutlineSmile size='25'/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.messageSendView}
          >
            <AiOutlinePaperClip size='25'/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.messageSendView}
          >
            <IoMdMic size='25'/>
          </TouchableOpacity>
          <TextInput
            defaultValue={inputMessage}
            inputContainerStyle={styles.messageInput}
            style={isInput ? [styles.messageInput, {outline: 'none', height: 20 + 20 * linesCount}]
                           : [styles.messageInput, {height: 20 + 20 * linesCount}]}
            value={inputMessage}
            placeholder='Message'
            onChangeText={(text) => {
              setInputMessage(text);
              setLinesCount(Math.min(inputMessage.split(/\r\n|\r|\n/).length, 10));
            }}
            onSubmitEditing={() => {
              props.sendMessage(inputMessage);
              setInputMessage('');
              setLinesCount(1);
            }}
            onFocus={() => setIsInput(true)}
            onBlur={() => setIsInput(false)}
            autoFocus={true}
            blurOnSubmit={false}
            spellCheck={false}
            multiline={true}
          />
          <TouchableOpacity
            style={styles.messageSendView}
            onPress={() => {
              props.sendMessage(inputMessage);
              setInputMessage('');
              setLinesCount(1);
            }}
          >
            <IoSend size='25'/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ChatPage = (props) => {
  const [currentUser] = useState({
    name: 'John Doe',
  });

  const [messages, setMessages] = useState([
    { sender: 'John Doe', message: 'Hey there!', time: '6:01 PM' },
    {
      sender: 'Robert Henry',
      message: 'Hello, how are you doing?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: 'I am good, how about you?',
      time: '6:02 PM',
    },
    {
      sender: 'John Doe',
      message: `😊😇`,
      time: '6:02 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Can't wait to meet you.`,
      time: '6:03 PM',
    },
    {
      sender: 'John Doe',
      message: `That's great, when are you coming?`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `This weekend.`,
      time: '6:03 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Around 4 to 6 PM.`,
      time: '6:04 PM',
    },
    {
      sender: 'John Doe',
      message: `Great, don't forget to bring me some mangoes.`,
      time: '6:05 PM',
    },
    {
      sender: 'Robert Henry',
      message: `Sure!`,
      time: '6:05 PM',
    },
  ]);

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

  function sendMessage(inputMessage) {
    if (inputMessage === '') {
      return;
    }
    let t = getTime(new Date());
    setMessages([
      ...messages,
      {
        sender: currentUser.name,
        message: inputMessage,
        time: t,
      },
    ]);
  }

  return (<Chat
    sendMessage={sendMessage}
    messages={messages}
    setMessages={setMessages}
    currentUser={currentUser}
  />);
}

const styles = StyleSheet.create({
  headerLeft: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: { height: '100%', aspectRatio: 1, borderRadius: 100 },
  container: {
    flex: 1,
    backgroundColor: '#1e2124',
    position: 'absolute',
    inset: '0 0 0 0',// fullscreen
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 14,
    backgroundColor: '#fff',
  },
  messageInput: {
    paddingTop: 10,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.itemBg,
    color: colors.itemFontColor,
    borderWidth: 0,
    borderColor: "transparent"
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    paddingVertical: 5,
    backgroundColor: colors.itemBg,
    color: colors.itemFontColor,
  },
});

export default ChatPage;