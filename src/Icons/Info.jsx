import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Info = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M5.333 1.333h5.054a4 4 0 0 1 4 4v5.054a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4V5.333a4 4 0 0 1 4-4Zm5.054 12.054a3.007 3.007 0 0 0 3-3V5.333a3.007 3.007 0 0 0-3-3H5.333a3.007 3.007 0 0 0-3 3v5.054a3.007 3.007 0 0 0 3 3h5.054Z"
      clipRule="evenodd"
    />
    <Path
      fill="#fff"
      d="M7.86 5.36a.507.507 0 0 0-.5.5c0 .277.223.503.5.507a.493.493 0 0 0 .5-.507.5.5 0 0 0-.5-.5ZM7.86 7.28a.5.5 0 0 0-.5.5v2.08a.5.5 0 0 0 1 0V7.793a.493.493 0 0 0-.5-.513Z"
    />
  </Svg>
)
export default Info
