import React, { memo } from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';
import colors from '../../constants/colors';

type StatusBarComptProps = {
  backgroundColor?: string;
  barStyle?: StatusBarStyle;
};

const StatusBarCompt: React.FC<StatusBarComptProps> = ({
  backgroundColor = colors?.white,
  barStyle = 'dark-content',
}) => {
  return <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />;
};

export default memo(StatusBarCompt);
