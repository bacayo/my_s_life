import {View} from 'react-native';
import React from 'react';
import IconSvg from '../IconComponent/SvgIcon';

import styles from './GalleryIconCard.Styles';
import {colors} from '../../infrastructure/theme/colors';

type Props = {
  onAddPhoto?: any;
  onCamera?: any;
  onT?: any;
};

const GalleryIconCard = ({onAddPhoto, onCamera, onT}: Props) => {
  return (
    <View style={styles.iconWrapper}>
      <IconSvg
        name="t"
        width={20}
        height={20}
        stroke={colors.secondary}
        onPress={onT}
      />
      <IconSvg name="addPhoto" width={24} height={24} onPress={onAddPhoto} />
      <IconSvg name="camera" width={24} height={24} onPress={onCamera} />
    </View>
  );
};

export default GalleryIconCard;
