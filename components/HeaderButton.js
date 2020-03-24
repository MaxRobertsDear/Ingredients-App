import React from 'react';
import Platform from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <Icon.Button
      {...props}
      name='star'
      backgroundColor='white'
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
      size={23}
      TouchableComponent
    ></Icon.Button>
  );
};

export default CustomHeaderButton;
