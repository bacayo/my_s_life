import {View} from 'react-native';
import React from 'react';
import IconSvg from '../IconComponent/SvgIcon';

import styles from './GalleryIconCard.Styles';
import {colors} from '../../infrastructure/theme/colors';

type Props = {
  onPress: any;
};

const GalleryIconCard = ({onPress}: Props) => {
  return (
    <View style={styles.iconWrapper}>
      <IconSvg name="t" width={20} height={20} stroke={colors.secondary} />
      <IconSvg name="addPhoto" width={24} height={24} onPress={onPress} />
      <IconSvg name="camera" width={24} height={24} />
    </View>
  );
};

export default GalleryIconCard;
