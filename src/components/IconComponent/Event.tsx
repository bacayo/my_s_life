import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgEvent = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M11.458.765 14.11 6.13a.443.443 0 0 0 .413.295l5.894.884c.472.059.648.648.295.943l-4.303 4.185a.67.67 0 0 0-.177.472l1.002 5.894c.059.471-.413.825-.825.59l-5.305-2.771a.818.818 0 0 0-.53 0l-5.305 2.77c-.413.236-.885-.117-.826-.59l1.002-5.893c.06-.177 0-.354-.176-.472L.966 8.251c-.177-.354 0-.884.471-.943l5.954-.884a.443.443 0 0 0 .412-.295L10.456.765c.176-.412.766-.412 1.002 0Z"
      fill="#737373"
    />
  </Svg>
);
export default SvgEvent;
