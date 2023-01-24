import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgAddPhoto = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5.5v3h3v2h-3v2.99s-1.99.01-2 0V5.5h-3s.01-1.99 0-2h3v-3h2Zm-2 19h-14v-14h9v-2h-9c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9Zm-7.79-3.17-1.96-2.36L4 17.5h11l-3.54-4.71-2.75 3.54Z"
      fill="#333"
    />
  </Svg>
);
export default SvgAddPhoto;
