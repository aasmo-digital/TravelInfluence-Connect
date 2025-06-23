// src/screens/shared/Chat/ChatListScreen.js

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// FAKE DATA for the list of chats
const FAKE_CHATS = [
  {
    id: '1',
    userName: 'Sophia Carter',
    avatar: 'https://i.pravatar.cc/150?u=sophia',
    lastMessage: 'Sounds great! I will be there. Looking forward to it.',
    time: '10:45 AM',
    unreadCount: 2,
  },
  {
    id: '2',
    userName: 'The Ritz London',
    avatar:
      'https://cdn.dribbble.com/users/1061278/screenshots/14603360/media/c8272ea89eb6a33728373a62854c86e6.jpg?compress=1&resize=400x300',
    lastMessage: 'We have accepted your proposal. Please confirm.',
    time: '9:30 AM',
    unreadCount: 0,
  },
  {
    id: '3',
    userName: 'Ethan Walker',
    avatar: 'https://i.pravatar.cc/150?u=ethan',
    lastMessage: 'Can you please share more details about the deliverables?',
    time: 'Yesterday',
    unreadCount: 0,
  },
];

const ChatListScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() =>
        // Navigate to the individual chat screen, passing user info
        navigation.navigate('Chat', {
          userName: item.userName,
          avatar: item.avatar,
        })
      }>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.chatContent}>
        <View style={styles.chatHeader}>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <View style={styles.messageRow}>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {item.lastMessage}
          </Text>
          {item.unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>{item.unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <Icon name="create-outline" size={28} color="#007BFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={FAKE_CHATS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  headerTitle: {fontSize: 28, fontFamily: 'Poppins-Bold', color: '#111'},
  listContainer: {paddingTop: 10},
  chatItem: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  avatar: {width: 60, height: 60, borderRadius: 30, marginRight: 15},
  chatContent: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 15,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {fontSize: 16, fontFamily: 'Poppins-SemiBold', color: '#111'},
  time: {fontSize: 12, fontFamily: 'Poppins-Regular', color: '#999'},
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#666',
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingHorizontal: 5,
  },
  unreadText: {color: 'white', fontSize: 12, fontFamily: 'Poppins-Bold'},
});

export default ChatListScreen;
