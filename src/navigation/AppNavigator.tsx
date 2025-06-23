import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
// import DiscoverScreen from '../screens/hotel/DiscoverScreen/DiscoverScreen';
// import CampaignsScreen from '../screens/shared/Campaigns/CampaignsScreen';
// import InfluencerDashboardScreen from '../screens/influencer/InfluencerDashboard/InfluencerDashboardScreen';
import LoginScreen from '../screens/auth/LoginScreen/LoginScreen';
// import {Text, View} from 'react-native';
import InfluemcerTabs from './InfluemcerTabs';
import HotelTabs from './HotelsTab';
import SplashScreen from '../screens/auth/splashScreen/SpalshScreen';

// Screens import karna

// Placeholder screens
// const PlaceholderScreen = ({route}) => (
//   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//     <Text>{route.name} Screen</Text>
//   </View>
// );

const Stack = createNativeStackNavigator();

// const Tab = createBottomTabNavigator();

// Hotel ke liye neeche ke Tabs
// function HotelTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{headerShown: false, tabBarActiveTintColor: '#007BFF'}}>
//       <Tab.Screen
//         name="Discover"
//         component={DiscoverScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="search-outline" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Campaigns"
//         component={CampaignsScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="briefcase-outline" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Messages"
//         component={PlaceholderScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="chatbubbles-outline" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={PlaceholderScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="person-circle-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// Influencer ke liye neeche ke Tabs
// function InfluencerTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{headerShown: false, tabBarActiveTintColor: '#007BFF'}}>
//       <Tab.Screen
//         name="Dashboard"
//         component={InfluencerDashboardScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="grid-outline" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Explore"
//         component={PlaceholderScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="compass-outline" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Messages"
//         component={PlaceholderScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="chatbubbles-outline" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="My Profile"
//         component={PlaceholderScreen}
//         options={{
//           tabBarIcon: ({color, size}) => (
//             <Icon name="person-circle-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// Poora App Navigator
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />

        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="HotelApp" component={HotelTabs} />
        <Stack.Screen name="InfluencerApp" component={InfluemcerTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
