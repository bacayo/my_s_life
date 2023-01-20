import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgLikesLogo = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 20 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M19.31.667s-6.804.69-9.31.69C7.494 1.356.69.666.69.666L0 6.184c3.218 1.609 5.977 3.678 8.276 6.207h3.448C14.023 9.86 16.782 7.793 20 6.184L19.31.667Z"
      fill="#BDBDBD"
    />
    <Path
      d="M19.31.667s-6.804.69-9.31.69C7.494 1.356.69.666.69.666L0 6.184h1.724c3.619 0 6.552 2.779 6.552 6.207h3.448c0-3.428 2.934-6.207 6.552-6.207H20L19.31.667Z"
      fill="#E0E0E0"
    />
  </Svg>
);
export default SvgLikesLogo;
