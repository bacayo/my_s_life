import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgArrowLeft = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 19 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.364 0 1.414 1.55L3.716 6H19v2H3.716l4.063 4.45L6.364 14 0 7.028.025 7 0 6.972 6.364 0Z"
      fill="#2E3A59"
    />
  </Svg>
);
export default SvgArrowLeft;
