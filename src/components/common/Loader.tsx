import React from 'react';
import {View, ActivityIndicator, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../constants';

type LoaderProps = {
  size?: 'small' | 'large';
  color?: string;
  containerStyle?: ViewStyle;
};

const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  color = Colors?.primary,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
