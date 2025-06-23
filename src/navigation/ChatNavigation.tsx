// src/navigation/ChatNavigator.js

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChatListScreen from '../screens/shared/chat/ChatListScreen';
import ChatScreen from '../screens/shared/chat/ChatScreen';

const Stack = createNativeStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatList"
        component={ChatListScreen}
        options={{headerShown: false}} // We made our own header in the component
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          headerTitleStyle: {fontFamily: 'Poppins-SemiBold'},
          headerStyle: {borderBottomWidth: 1, borderBottomColor: '#f2f2f2'},
          elevation: 0,
          shadowOpacity: 0,
        }}
      />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
