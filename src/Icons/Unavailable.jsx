import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Unavailable = (props) => (
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
      d="M6.5 1a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM2.25 6a4.24 4.24 0 0 1 7.135-3.11l-6 6A4.215 4.215 0 0 1 2.25 6Zm1.7 3.39a4.24 4.24 0 0 0 5.94-5.94L3.95 9.39Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Unavailable
