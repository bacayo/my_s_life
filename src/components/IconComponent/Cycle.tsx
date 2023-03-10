import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCycle = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M10 2.02a7.327 7.327 0 0 1 7.109 5.577l-1.189-.839-.677.96 2.79 1.967L20 6.896l-.96-.677-.787 1.116A8.502 8.502 0 0 0 10 .847c-2.268 0-4.401.883-6.005 2.487a8.436 8.436 0 0 0-2.487 6.005h1.174C2.682 5.304 5.965 2.02 10 2.02ZM10 17.98a7.327 7.327 0 0 1-7.109-5.577l1.189.839.677-.96-2.79-1.967L0 13.104l.96.677.786-1.116A8.502 8.502 0 0 0 10 19.154c2.268 0 4.4-.884 6.005-2.488a8.436 8.436 0 0 0 2.487-6.005h-1.174c0 4.036-3.283 7.318-7.318 7.318Z"
      fill="#754845"
    />
    <Path
      d="m10 5.772-.373.305c-.117.096-2.87 2.379-2.87 4.737A3.245 3.245 0 0 0 10 14.056a3.245 3.245 0 0 0 3.241-3.242c0-2.358-2.752-4.64-2.869-4.737L10 5.772Zm2.066 5.042A2.07 2.07 0 0 1 10 12.881a2.07 2.07 0 0 1-2.067-2.067c0-1.27 1.268-2.74 2.067-3.497.799.757 2.067 2.228 2.067 3.497Z"
      fill="#754845"
    />
  </Svg>
);
export default SvgCycle;
