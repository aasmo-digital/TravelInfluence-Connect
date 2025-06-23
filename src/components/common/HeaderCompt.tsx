import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
  ImageSourcePropType,
} from 'react-native';
import {Colors, CustomFonts} from '../../constants';
import {useNavigation} from '@react-navigation/native';

type HeaderComptProps = {
  leftIcon?: ImageSourcePropType;
  title?: string;
  titleStyle?: TextStyle;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
  containerStyle?: ViewStyle;
};

const HeaderCompt: React.FC<HeaderComptProps> = ({
  leftIcon,

  title,
  titleStyle,
  rightIcon,
  onRightPress,
  containerStyle,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left Icon */}
      {leftIcon ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={leftIcon} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      {/* Title */}
      <Text style={[styles.title, titleStyle]} numberOfLines={1}>
        {title}
      </Text>

      {/* Right Icon */}
      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress}>
          <Image source={rightIcon} style={styles.icon} resizeMode="contain" />
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
    </View>
  );
};

export default HeaderCompt;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    color: Colors.black,
    fontFamily: CustomFonts?.PoppinsSemiBold,
  },
});
