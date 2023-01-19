import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMap = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 18 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M8.224 19.627c.394.572 1.313.572 1.706 0 6.636-5.694 7.57-7.737 7.57-10.925C17.5 4.37 13.736.856 9.1.856 4.417.856.7 4.37.7 8.702c0 3.188.933 5.667 7.524 10.925ZM9.1 11.97c-1.969 0-3.5-1.43-3.5-3.269 0-1.798 1.531-3.27 3.5-3.27 1.925 0 3.5 1.472 3.5 3.27 0 1.839-1.575 3.27-3.5 3.27Z"
      fill="#737373"
    />
  </Svg>
);
export default SvgMap;
