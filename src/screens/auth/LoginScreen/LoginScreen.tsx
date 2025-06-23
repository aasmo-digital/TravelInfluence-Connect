import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';

import styles from './style.login';
import {ButtonCompt, StatusBarCompt} from '../../../components';
import useLogin from './useLogin';
import {Colors} from '../../../constants';

const LoginScreen = ({navigation}: any) => {
  const {
    handleInstagramLogin,
    fetchUserProfile,
    sendTokenToBackend,
    fetchMyFollowersFromFrontend,
    isHotel,
    setIsHotel,
    onPressInfluencerBtn,
    onPressHotelBtn,
  } = useLogin();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBarCompt />
      <View style={styles.content}>
        <Text style={styles.brand}>TravelInfluence Connect</Text>
        <Text style={styles.title}>Join TravelInfluence Connect</Text>
        <Text style={styles.subtitle}>
          Connect with top travel influencers or hotels for exciting
          collaborations.
        </Text>

        <ButtonCompt
          title={"I'm a Hotel"}
          onPress={onPressHotelBtn}
          isloading={false}
          titlestyle={{color: isHotel == 0 ? Colors?.white : Colors?.black}}
          btnstyle={{
            backgroundColor: isHotel == 0 ? Colors?.primary : Colors?.lightGray,
          }}
          // onPress={() => navigation.replace('HotelApp')}
        />
        <ButtonCompt
          title={"I'm an Influencer"}
          onPress={onPressInfluencerBtn}
          isloading={false}
          titlestyle={{color: isHotel == 1 ? Colors?.white : Colors?.black}}
          btnstyle={{
            backgroundColor: isHotel == 1 ? Colors?.primary : Colors?.lightGray,
          }}
          // onPress={() => navigation.replace('InfluencerApp')}
        />

        <Text style={styles.orText}>Or sign up with</Text>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleInstagramLogin}
            style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Social</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.signInText}>
            Already have an account? Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
