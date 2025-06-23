import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';
import React, {memo} from 'react';
import Colors from '../../constants/colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
  isloading: boolean;
  btnstyle?: any;
  titlestyle?: any;
}

const ButtonCompt: React.FC<ButtonProps> = ({
  onPress,
  title,
  isloading,
  btnstyle,
  titlestyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.button, btnstyle]}
      onPress={onPress}>
      {isloading ? (
        <ActivityIndicator color={Colors?.white} />
      ) : (
        <Text style={[styles.buttonText, titlestyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(ButtonCompt);
const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
