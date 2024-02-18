import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Check = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#00FF47"
      d="M4.605 8.78a.375.375 0 0 1-.235-.07L2.125 6.855a.37.37 0 0 1-.05-.5.375.375 0 0 1 .5-.055l2 1.63 5.25-4.855a.375.375 0 0 1 .5.555L4.86 8.68a.38.38 0 0 1-.255.1Z"
    />
  </Svg>
)
export default Check
