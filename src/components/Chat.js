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
import { GiftedChat } from 'react-native-gifted-chat';

const InputToolbar = (props) => {
  const [isInput, setIsInput] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [linesCount, setLinesCount] = useState(1);

  return (
    <View>
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
            props.sendMessage([{_id: 1,
              text: inputMessage,
              createdAt: new Date(),
              user: props.currentUser,
            }]);
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
            props.sendMessage([{_id: 1,
              text: inputMessage,
              createdAt: new Date(),
              user: props.currentUser,
            }]);
            setInputMessage('');
            setLinesCount(1);
          }}
        >
          <IoSend size='25'/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Chat = (props) => {
  return (
    <View style={styles.container}>
      {/* <FlatList
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
      /> */}
      <GiftedChat
        messages={props.messages}
        user={{_id: 1,}}
        renderInputToolbar={() => (
          <InputToolbar
            sendMessage={props.sendMessage}
            currentUser={props.currentUser}
          />
        )}
      />
    </View>
  );
};

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

export default Chat;