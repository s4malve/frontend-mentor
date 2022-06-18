import { memo } from 'react'

const Button = ({ type = 'btn-primary', href = '', children }) => {
  const className = `btn ${type}`

  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button className={className}>{children}</button>
  )
}

export default memo(Button)
