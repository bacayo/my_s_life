import {View, Text} from 'react-native';
import React from 'react';
import IconSvg from '../../components/IconComponent/SvgIcon';

import styles from './Navbar.Styles';

type Props = {
  navbarText: string;
  iconName: string;
  onPress: any;
};

const Navbar = ({navbarText, iconName, onPress}: Props) => {
  return (
    <View style={styles.navbar}>
      <IconSvg
        name={iconName}
        width={19}
        height={14}
        stroke="#2E3A59"
        onPress={onPress}
      />
      <Text style={styles.navbarText}>{navbarText}</Text>
    </View>
  );
};

export default Navbar;
