import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgT = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 3v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7.5Z"
      fill="#0C866C"
    />
  </Svg>
);
export default SvgT;
