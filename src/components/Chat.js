import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from 'react-native';
import { IoSend } from 'react-icons/io5';
import { IoMdMic } from 'react-icons/io';
import { AiOutlineSmile, AiOutlinePaperClip } from 'react-icons/ai';
import { colors } from '../theme';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

const StyledBubble = (props) => {
  return (
    <Bubble
      {...props}

      wrapperStyle={{
        right: { backgroundColor: '#6665d2', },
        left: { backgroundColor: '#6665d2' },
      }}

      containerToPreviousStyle={{
        right: { borderTopRightRadius: 15 },
        left: { borderTopLeftRadius: 15 },
      }}
      containerToNextStyle={{
        right: { borderBottomRightRadius: 15 },
        left: { borderBottomLeftRadius: 15 },
      }}
      containerStyle={{
        right: { borderTopRightRadius: 15 },
        left: { borderTopLeftRadius: 15 },
      }}

      textStyle={{
        left: { color: '#fff', fontSize: 16 },
        right: { color: '#fff', fontSize: 16 },
      }}
    />
  )
}

const InputToolbar = (props) => {
  const [isInput, setIsInput] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [linesCount, setLinesCount] = useState(1);

  const sendMessage = () => {
    if (inputMessage != '') {
      props.sendMessage([{_id: 1,
        text: inputMessage,
        createdAt: new Date(),
        user: props.currentUser,
      }]);
      setInputMessage('');
      setLinesCount(1);
    }
  }

  const textInputStyle = () => {
    return isInput ? [styles.messageInput, {outline: 'none', height: 20 + 20 * linesCount},]
                   : [styles.messageInput, {height: 20 + 20 * linesCount}]
  }

  return (
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
        style={textInputStyle()}
        value={inputMessage}
        placeholder='Message'
        onChangeText={(text) => {
          setInputMessage(text);
          setLinesCount(Math.max(
            1, 
            Math.min(
              inputMessage.split(/\r\n|\r|\n/).length - 1,
              10
            )
          ));
        }}
        onSubmitEditing={sendMessage}
        onFocus={() => setIsInput(true)}
        onBlur={() => setIsInput(false)}
        autoFocus={true}
        blurOnSubmit={false}
        spellCheck={false}
        multiline={true}
      />
      <TouchableOpacity
        style={styles.messageSendView}
        onPress={sendMessage}
      >
        <IoSend size='25'/>
      </TouchableOpacity>
    </View>
  )
}

const MessageBubble = (props) => {

};

const Chat = (props) => {
  return (
    <View style={styles.container}>
      <GiftedChat
        messages={props.messages}
        user={{_id: 1,}}
        renderInputToolbar={() => (
          <InputToolbar
            sendMessage={props.sendMessage}
            currentUser={props.currentUser}
          />
        )}
        renderBubble={(props) => (
          <StyledBubble {...props}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2124',
    position: 'absolute',
    inset: '0 0 0 0',// fullscreen
  },
  messageInputView: {
    display: 'flex',
    flexDirection: 'row',
    // marginHorizontal: 14,
    // backgroundColor: '#fff',
  },
  messageInput: {
    paddingTop: 10,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.itemBg,
    color: colors.itemFontColor,
    borderWidth: 0,
    borderColor: "transparent",
  },
  messageSendView: {
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    paddingVertical: 5,
    backgroundColor: colors.itemBg,
    color: colors.itemFontColor,
  },
});

export default Chat;