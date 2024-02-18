import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Play = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M5.555 2.755 9.18 4.85a1.5 1.5 0 0 1 0 2.595L5.555 9.54a1.5 1.5 0 0 1-2.25-1.3V4.055a1.5 1.5 0 0 1 2.25-1.3Zm-.45 6.005L8.73 6.67a.595.595 0 0 0 .3-.52.6.6 0 0 0-.3-.525l-3.625-2.09a.595.595 0 0 0-.3-.085.605.605 0 0 0-.605.605V8.24a.605.605 0 0 0 .605.605.595.595 0 0 0 .3-.085Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Play
