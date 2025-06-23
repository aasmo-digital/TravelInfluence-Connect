// src/screens/shared/Chat/ChatScreen.js

import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {GiftedChat, Bubble, Send, InputToolbar} from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatScreen = ({route, navigation}:any) => {
  const {userName, avatar} = route.params; // Get user info from previous screen
  const [messages, setMessages] = useState<any>([]);

  // Dynamically set the header title to the user's name
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: userName,
      headerBackTitleVisible: false, // Hide "Back" text on iOS
    });
  }, [navigation, userName]);

  // Load initial messages (fake data)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello! We are interested in collaborating with you.',
        createdAt: new Date(),
        user: {
          _id: 2, // Other user's ID
          name: userName,
          avatar: avatar,
        },
      },
      {
        _id: 2,
        text: 'Hi! That sounds amazing. What do you have in mind?',
        createdAt: new Date(Date.now() - 60000), // 1 minute ago
        user: {
          _id: 1, // Current user's ID
          name: 'My Hotel',
          avatar: 'https://i.pravatar.cc/150?u=my-hotel',
        },
      },
    ].reverse()); // Gifted chat expects messages in reverse chronological order
  }, [userName, avatar]);

  // This function is called when the user sends a message
  const onSend = useCallback((messages = []) => {
    // In a real app, you would send this message to your backend (Socket.io/Firebase)
    // e.g., socket.emit('sendMessage', messages[0]);
    setMessages((previousMessages: never[] | undefined) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  // --- Customizing Gifted Chat UI to look professional ---

  const renderBubble = (props:any) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {backgroundColor: '#007BFF'}, // My messages
          left: {backgroundColor: '#EFEFEF'}, // Other user's messages
        }}
        textStyle={{
          right: {color: '#FFF', fontFamily: 'Poppins-Regular'},
          left: {color: '#333', fontFamily: 'Poppins-Regular'},
        }}
      />
    );
  };

  const renderSend = (props:any) => {
    return (
      <Send {...props} containerStyle={{justifyContent: 'center'}}>
        <Icon name="send" size={28} color="#007BFF" style={{marginRight: 10}} />
      </Send>
    );
  };

  const renderInputToolbar = (props:any) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={styles.inputToolbar}
        primaryStyle={{alignItems: 'center'}}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1, // Current logged-in user's ID. This should be dynamic.
      }}
      renderBubble={renderBubble}
      renderSend={renderSend}
      renderInputToolbar={renderInputToolbar}
      alwaysShowSend
      placeholder="Type your message..."
      messagesContainerStyle={{paddingBottom: 10}}
    />
  );
};

const styles = StyleSheet.create({
  inputToolbar: {
    borderTopColor: '#F0F0F0',
    borderTopWidth: 1.5,
    paddingTop: 4,
  },
});

export default ChatScreen;