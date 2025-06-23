import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {useNavigation} from '@react-navigation/native';

const useLogin = () => {
  const [isHotel, setIsHotel] = useState<number>(0);
  console.log('====', isHotel == 0 ? 'hotel' : 'insta');
  const navigation: any = useNavigation();

  // Step 2: Login button dabane par chalne wala function
  const handleInstagramLogin = async () => {
    try {
      // Ye Meta se login karwayega aur permission maangega
      const result = await LoginManager.logInWithPermissions(
        ['public_profile', 'email', 'instagram_basic', 'pages_show_list'],
        'limited', // Limited Login Mode use karna best practice hai
        'nonce', // ek random string
      );

      console.log('----result----', result);

      // Agar user ne login cancel kar diya
      if (result.isCancelled) {
        Alert.alert('Login Cancelled', 'You cancelled the login process.');
        return;
      }

      // Agar login ho gaya, to Access Token nikalna
      const tokenData = await AccessToken.getCurrentAccessToken();
      if (!tokenData) {
        Alert.alert('Login Error', 'Failed to get access token.');
        return;
      }

      const accessToken = tokenData.accessToken.toString();
      // Alert.alert('Login Success!', `Your Access Token is: ${accessToken}`);
      console.log('Login Success!', `Your Access Token is: ${accessToken}`);

      // Bonus: Is token se user ka naam aur email nikalna
      fetchUserProfile(accessToken);
      //insta data nikalne k liy
      fetchMyFollowersFromFrontend(accessToken);

      // YAHAN AAPKA KAAM HAI:
      // Is 'accessToken' ko apne backend ko bhejna hai.
      // Example:
      // sendTokenToBackend(accessToken);

      if (isHotel == 0) {
        navigation.replace('HotelApp');
      } else {
        navigation.replace('InfluencerApp');
      }
    } catch (error: any) {
      console.error(error);
      Alert.alert('Login Failed', `An error occurred: ${error.message}`);
    }
  };

  // Ye function token ka use karke user ki profile nikalega
  const fetchUserProfile = (accessToken: any) => {
    const infoRequest = new GraphRequest(
      '/me',
      {
        accessToken: accessToken,
        parameters: {
          fields: {
            string: 'email,name,first_name,middle_name,last_name',
          },
        },
      },
      (error, result: any) => {
        if (error) {
          console.log('Error fetching data: ', error);
        } else {
          console.log('User Profile: ', result);
          Alert.alert(
            'Profile Info',
            `Hi ${result.name}! Your email is ${result.email}`,
          );
        }
      },
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  // Ye function backend ko token bhejega (Abhi ke liye bas console log karega)
  const sendTokenToBackend = (token: any) => {
    console.log('SENDING THIS TOKEN TO BACKEND:', token);
    // Yahan fetch() ya axios ka use karke API call hogi
    // fetch('https://YOUR_BACKEND_URL/api/auth/login', { method: 'POST', ... })
  };

  // Function to fetch followers directly from frontend
  const fetchMyFollowersFromFrontend = async (accessToken: any) => {
    try {
      // const tokenData = await AccessToken.getCurrentAccessToken();
      // if (!tokenData) {
      //   console.log("Token nahi hai, pehle login karein");
      //   return;
      // }

      // const accessToken = tokenData.accessToken;

      // Yahan hum directly Meta ki Graph API ko call kar rahe hain
      const response = await fetch(
        `https://graph.facebook.com/v15.0/me?fields=followers_count&access_token=${accessToken}`,
      );

      const data = await response.json();

      if (data.followers_count) {
        console.log('MERE FOLLOWERS (FRONTEND SE):', data.followers_count);
        Alert.alert(
          'Followers',
          `Aapke followers hain: ${data.followers_count}`,
        );
      } else {
        console.log('Error fetching followers:', data);
      }
    } catch (error) {
      console.error('API call error:', error);
    }
  };

  const onPressHotelBtn = () => {
    setIsHotel(0); // Always set to Hotel
  };

  const onPressInfluencerBtn = () => {
    setIsHotel(1); // Always set to Influencer
  };

  return {
    handleInstagramLogin,
    fetchUserProfile,
    sendTokenToBackend,
    fetchMyFollowersFromFrontend,
    isHotel,
    setIsHotel,
    onPressInfluencerBtn,
    onPressHotelBtn,
  };
};

export default useLogin;
