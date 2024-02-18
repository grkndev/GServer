import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Person = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="m10.29 8.855.12.57A1.695 1.695 0 0 1 8.82 11.5H4.18a1.695 1.695 0 0 1-1.59-2.075l.12-.57A1.645 1.645 0 0 1 4.295 7.5h4.41a1.645 1.645 0 0 1 1.585 1.355Zm-1.47 1.89a.84.84 0 0 0 .65-.32v.005a1.04 1.04 0 0 0 .205-.86L9.555 9a.895.895 0 0 0-.85-.755h-4.41a.895.895 0 0 0-.85.755l-.12.57a1.04 1.04 0 0 0 .205.855.84.84 0 0 0 .65.32h4.64ZM6.75 6.5h-.5a2 2 0 0 1-2-2V3.18A1.675 1.675 0 0 1 5.93 1.5h1.14a1.675 1.675 0 0 1 1.68 1.68V4.5a2 2 0 0 1-2 2Zm-.82-4.25a.93.93 0 0 0-.93.93V4.5c0 .69.56 1.25 1.25 1.25h.5C7.44 5.75 8 5.19 8 4.5V3.18a.93.93 0 0 0-.93-.93H5.93Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Person
