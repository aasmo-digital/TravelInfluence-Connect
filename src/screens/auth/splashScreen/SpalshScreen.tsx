import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {Colors, CustomFonts, FontSize} from '../../../constants';

const SplashScreen = ({navigation}: any) => {
  // Ye code 3 second ke baad user ko Login screen par bhej dega
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('HotelApp'); // 'replace' use kiya taaki user back karke splash screen par na aa sake
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Cleanup function
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* Top Image */}
      <Image
        source={{
          uri: 'https://static.toiimg.com/thumb/116532525/Travellers.jpg?width=636&height=358&resize=4',
        }}
        style={styles.heroImage}
      />

      {/* Bottom Content Area */}
      <View style={styles.contentContainer}>
        <Text style={styles.tagline}>TravelInfluence Connect</Text>
        <Text style={styles.mainTitle}>Connecting Influencers with Hotels</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  heroImage: {
    width: '100%',
    height: '70%', // Screen ka 60% hissa image legi
  },
  contentContainer: {
    flex: 1, // Bacha hua poora space ye lega
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  tagline: {
    fontSize: 16,
    fontFamily: CustomFonts?.PoppinsRegular,
    color: '#8898aa', // Thoda halka color
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: FontSize?.[26],
    fontFamily: CustomFonts?.PoppinsSemiBold,
    color: '#1E2A32', // Dark black color
    textAlign: 'center',
    lineHeight: 40,
  },
});

export default SplashScreen;
