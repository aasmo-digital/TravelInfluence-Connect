import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DiscoverScreen from '../screens/hotel/DiscoverScreen/DiscoverScreen';
import CampaignsScreen from '../screens/shared/Campaigns/CampaignsScreen';
import HotelProfile from '../screens/hotel/hotelProfile/HotelProfile';
import ChatNavigator from './ChatNavigation';

// Influencer ke liye neeche ke Tabs
const HotelTabs = () => {
  // Placeholder screens
  const PlaceholderScreen = ({route}: any) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.name} Screen</Text>
    </View>
  );
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: '#007BFF'}}>
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Campaigns"
        component={CampaignsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="briefcase-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbubbles-outline" color={color} size={size} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="Messages"
        component={ChatNavigator} // <-- USE THE CHAT NAVIGATOR HERE
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="chatbubbles-outline" color={color} size={size} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Profile"
        component={HotelProfile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HotelTabs;
