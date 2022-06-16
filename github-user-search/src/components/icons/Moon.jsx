import { memo } from 'react'

const Moon = (props) => (
  <svg
    height={21}
    width={21}
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 3.5c1.328 0 2.57.37 3.628 1.012a6 6 0 0 0-.001 11.977A7 7 0 1 1 11.5 3.5z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default memo(Moon)
