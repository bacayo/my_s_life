import {View, Text} from 'react-native';
import React from 'react';
import IconSvg from '../../components/IconComponent/SvgIcon';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FeedStackParamList} from '../../infrastructure/types/nav.types';

import styles from './Navbar.Styles';

type Props = {
  navbarText: string;
};

const Navbar = ({navbarText}: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<FeedStackParamList>>();

  const handleNavbarNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.navbar}>
      <IconSvg
        name="arrowLeft"
        width={19}
        height={14}
        stroke="#2E3A59"
        onPress={handleNavbarNavigation}
      />
      <Text style={styles.navbarText}>{navbarText}</Text>
    </View>
  );
};

export default Navbar;
