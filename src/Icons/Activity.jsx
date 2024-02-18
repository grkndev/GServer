import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Activity = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M10.86 6.044H9.42a1.36 1.36 0 0 0-.97.4l-2.21 2.21V3.88a.625.625 0 0 0-1.07-.435L2.755 5.86a.62.62 0 0 1-.445.185H.875a.375.375 0 1 0 0 .75H2.31a1.37 1.37 0 0 0 1-.405l2.17-2.205V8.96c0 .252.152.48.385.575a.615.615 0 0 0 .68-.135L8.98 6.974a.625.625 0 0 1 .44-.18h1.44a.375.375 0 0 0 0-.75Z"
    />
  </Svg>
);
export default Activity;
