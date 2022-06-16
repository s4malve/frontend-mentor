import { memo } from 'react'

const ArrowUp = (props) => (
  <svg
    height={21}
    width={21}
    viewBox="0 0 21 21"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.5 12.5 4-4 4 4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default memo(ArrowUp)
