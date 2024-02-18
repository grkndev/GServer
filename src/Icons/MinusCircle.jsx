import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MinusCircle = (props) => (
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
      d="M6.22 1h.56a4.72 4.72 0 0 1 4.72 4.72v.56A4.72 4.72 0 0 1 6.78 11h-.56A4.72 4.72 0 0 1 1.5 6.28v-.56A4.72 4.72 0 0 1 6.22 1Zm.56 9.25a4 4 0 0 0 3.97-3.97v-.56a4 4 0 0 0-3.97-3.97h-.56a4 4 0 0 0-3.97 3.97v.56a4 4 0 0 0 3.97 3.97h.56Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M8.5 5.625h-4a.375.375 0 1 0 0 .75h4a.375.375 0 1 0 0-.75Z"
    />
  </Svg>
)
export default MinusCircle
