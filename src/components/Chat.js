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
import { position } from 'dom-helpers';

const StyledBubble = (props) => {
  return (
    <Bubble
      {...props}

      wrapperStyle={{
        right: { backgroundColor: '#6665d2', borderRadius: 20 },
        left: { backgroundColor: '#6665d2', borderRadius: 20 },
      }}

      containerToPreviousStyle={{
        right: { borderTopRightRadius: 5 },
        left: { borderTopLeftRadius: 5 },
      }}
      containerToNextStyle={{
        right: { borderBottomRightRadius: 5 },
        left: { borderBottomLeftRadius: 5 },
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
        onPress={() => alert('open smiles')}
      >
        <AiOutlineSmile size='25'/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.messageSendView}
        onPress={() => alert('send file or smth')}
      >
        <AiOutlinePaperClip size='25'/>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.messageSendView}
        onPress={() => alert('send voice message')}
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

const Chat = (props) => {
  return (
    <View style={styles.container}>
      <GiftedChat
        messages={props.messages}
        user={{_id: 1,}}
        minInputToolbarHeight={0}
        renderInputToolbar={() => null}
        renderBubble={(props) => (
          <StyledBubble {...props}/>
        )}
        onPressAvatar={(user) => alert(`open profile of user with id=${user._id}`)}
      />
      <InputToolbar
        sendMessage={props.sendMessage}
        currentUser={props.currentUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2124',
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