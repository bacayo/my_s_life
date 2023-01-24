import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCamera = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 5.5h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2Zm9.83 0h3.17c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-16c-1.1 0-2-.9-2-2v-9h2v9h16v-12h-4.05l-1.83-2H10.5v-2h6l1.83 2Zm-4.83 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Z"
      fill="#333"
    />
  </Svg>
);
export default SvgCamera;
