import React from 'react';
import {Mid, Chatlist, Event, HomeIcon, Map} from '.';

type Props = {
  width: number;
  height: number;
  stroke?: string;
  name: string;
};

const icon: any = {
  mid: Mid,
  chat: Chatlist,
  event: Event,
  home: HomeIcon,
  map: Map,
};

export default function IconSvg(props: Props) {
  const Icon: any = icon[props.name];
  return (
    <Icon width={props.width} height={props.height} stroke={props.stroke} />
  );
}
