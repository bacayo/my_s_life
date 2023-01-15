import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const figmaHeight: number = 806;
const figmaWidth: number = 375;

export const calculateHeight = (space: number): number => {
  return height * parseFloat((space / figmaHeight).toFixed(2));
};

export const calculateWidth = (space: number): number => {
  return width * parseFloat((space / figmaWidth).toFixed(2));
};
