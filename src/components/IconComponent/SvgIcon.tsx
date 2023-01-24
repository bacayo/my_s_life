import React from 'react';
import {
  Mid,
  Chatlist,
  Event,
  HomeIcon,
  Map,
  ProfilePhoto,
  ArrowRight,
  Profilebg,
  Cycle,
  Calendar,
  LikesLogo,
  ChevronDown,
  ArrowLeft,
  AddPhoto,
  Camera,
  T,
  Cross,
} from '.';

type Props = {
  width: number;
  height: number;
  stroke?: string;
  name: string;
  onPress?: any;
};

const icon: any = {
  mid: Mid,
  chat: Chatlist,
  event: Event,
  home: HomeIcon,
  map: Map,
  pp: ProfilePhoto,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  profileBG: Profilebg,
  cycle: Cycle,
  calendar: Calendar,
  likes: LikesLogo,
  chevronDown: ChevronDown,
  addPhoto: AddPhoto,
  camera: Camera,
  t: T,
  cross: Cross,
};

export default function IconSvg(props: Props) {
  const Icon: any = icon[props.name];
  return (
    <Icon
      width={props.width}
      height={props.height}
      stroke={props.stroke}
      onPress={props.onPress}
    />
  );
}
