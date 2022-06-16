import { memo } from 'react'

const Check = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 11"
    width={11}
    height={9}
    {...props}
  >
    <path fill="none" stroke="#FFF" strokeWidth={2} d="M1 4.304 3.696 7l6-6" />
  </svg>
)

export default memo(Check)
