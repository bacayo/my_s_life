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
} from '.';
import SvgArrowLeft from './ArrowLeft';

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
  arrowLeft: SvgArrowLeft,
  pp: ProfilePhoto,
  arrowRight: ArrowRight,
  profileBG: Profilebg,
  cycle: Cycle,
  calendar: Calendar,
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
