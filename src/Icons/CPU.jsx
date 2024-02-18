import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CPU = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5 4.889h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1Zm2 3.25a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25H5a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M9.5 7.514H11a.375.375 0 0 1 0 .75H9.5v.125a2 2 0 0 1-2 2h-.125v1.5a.375.375 0 0 1-.75 0v-1.5h-1.25v1.5a.375.375 0 0 1-.75 0v-1.5H4.5a2 2 0 0 1-2-2v-.125H1a.375.375 0 0 1 0-.75h1.5v-1.25H1a.375.375 0 0 1 0-.75h1.5v-.125a2 2 0 0 1 2-2h.125v-1.5a.375.375 0 1 1 .75 0v1.5h1.25v-1.5a.375.375 0 1 1 .75 0v1.5H7.5a2 2 0 0 1 2 2v.125H11a.375.375 0 0 1 0 .75H9.5v1.25Zm-2 2.125c.69 0 1.25-.56 1.25-1.25v-3c0-.69-.56-1.25-1.25-1.25h-3c-.69 0-1.25.56-1.25 1.25v3c0 .69.56 1.25 1.25 1.25h3Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default CPU;
