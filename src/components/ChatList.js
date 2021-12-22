import React from 'react';
import { FlatList, Image, View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { colors } from '../theme';
import { IoMdSettings } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Toolbar = (props) => {
  let navigate = useNavigate();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#1e2124',
      }}
    >
      <TouchableOpacity
        style={styles.toolbarButton}
        onPress={() => navigate('/settings')}
      >
        <IoMdSettings size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.toolbarButton}
        onPress={() => navigate('/login')}  
      >
        <FiLogOut size={25} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  chatName: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: 10,
  },
  messageAuthor: {
    color: colors.white,
    fontWeight: 'bold',
  },
  message: {
    color: colors.white,
    fontWeight: 'normal'
  },
  toolbarButton: {
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
    paddingVertical: 5,
    backgroundColor: '#1e2124',
    color: colors.itemFontColor,
  },
});

const ChatItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View style={{padding: 10}}>
          <Image
            style={styles.avatar}
            source={{uri: props.avatar}}
          />
        </View>
        <View>
          <Text style={styles.chatName}>{props.chatName}</Text>
          <Text style={styles.messageAuthor}>
            {props.lastMessage ? `${props.lastMessage.author}: ` : ''}
            <Text style={styles.message}> 
              {props.lastMessage ? `${props.lastMessage.text}` : ''}
            </Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const ChatList = (props) => {
  const renderItem = ({item}) => {
    return (
      <ChatItem
        avatar={item.avatar}
        chatName={item.name}
        lastMessage={item.lastMessage ? {
          author: item.lastMessage?.user.name,
          text: item.lastMessage?.text,
          date: item.lastMessage?.createdAt,
        } : null}
        onPress={() => props.openChat(item._id)}
      />
    )
  }

  return (
    <View style={{height: '100%'}}>
      <FlatList
        style={{ backgroundColor: '#1e2124', }}
        data={props.chats}
        renderItem={renderItem}
      />
      <Toolbar/>
    </View>
  );
};

export default ChatList;