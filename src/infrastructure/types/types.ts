import {ImageSourcePropType} from 'react-native';

export interface DiseaseInterface {
  id: number;
  disease: string;
}

export interface GalleryImagesInterface {
  id: number;
  image: ImageSourcePropType;
}
