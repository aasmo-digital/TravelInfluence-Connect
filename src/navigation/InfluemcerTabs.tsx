import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import InfluencerDashboardScreen from '../screens/influencer/InfluencerDashboard/InfluencerDashboardScreen';
import Icon from 'react-native-vector-icons/Ionicons';

// Influencer ke liye neeche ke Tabs
const InfluemcerTabs = () => {
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
        name="Dashboard"
        component={InfluencerDashboardScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="grid-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="compass-outline" color={color} size={size} />
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
      <Tab.Screen
        name="My Profile"
        component={PlaceholderScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default InfluemcerTabs;
