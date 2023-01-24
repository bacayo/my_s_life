import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCross = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="m11.516.298-4.64 4.64L2.234.299a.353.353 0 0 0-.464 0l-.928.928a.324.324 0 0 0 0 .464l4.64 4.64-4.64 4.641a.323.323 0 0 0 0 .464l.928.928c.145.145.319.145.464 0l4.64-4.64 4.64 4.64c.146.145.32.145.465 0l.928-.928a.323.323 0 0 0 0-.464l-4.64-4.64 4.64-4.64a.324.324 0 0 0 0-.465L11.98.298a.353.353 0 0 0-.464 0Z"
      fill="#2E3A59"
    />
  </Svg>
);
export default SvgCross;
