import { memo } from 'react'

const Company = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 60 60"
    style={{
      enableBackground: 'new 0 0 512 512',
    }}
    xmlSpace="preserve"
    fill="currentColor"
    {...props}
  >
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="m54.37 26.7-19.43-7.82V6c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v48c0 .55.45 1 1 1h48c.55 0 1-.45 1-1V27.63a1 1 0 0 0-.63-.93zM7 7h25.94v46h-6.51V39.88c0-.55-.45-1-1-1H14.51c-.55 0-1 .45-1 1V53H7zm8.51 46V40.88h8.93V53zM53 53H34.94V21.03L53 28.3z"
      data-original="#000000"
    />
    <path
      xmlns="http://www.w3.org/2000/svg"
      d="M12.64 16.06h14.67c.55 0 1-.45 1-1s-.45-1-1-1H12.64c-.55 0-1 .45-1 1s.45 1 1 1zM12.64 23.94h14.67c.55 0 1-.45 1-1s-.45-1-1-1H12.64c-.55 0-1 .45-1 1s.45 1 1 1zM27.31 31.81c.55 0 1-.45 1-1s-.45-1-1-1H12.64c-.55 0-1 .45-1 1s.45 1 1 1zM38.89 34h10.17c.55 0 1-.45 1-1s-.45-1-1-1H38.89c-.55 0-1 .45-1 1s.45 1 1 1zM38.89 40.63h10.17c.55 0 1-.45 1-1s-.45-1-1-1H38.89c-.55 0-1 .45-1 1s.45 1 1 1zM38.89 47.25h10.17c.55 0 1-.45 1-1s-.45-1-1-1H38.89c-.55 0-1 .45-1 1s.45 1 1 1z"
      data-original="#000000"
    />
  </svg>
)

export default memo(Company)
