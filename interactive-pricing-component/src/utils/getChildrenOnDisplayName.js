import { Children } from 'react'

export default (children, displayName) =>
  Children.map(children, (child) =>
    child.type.displayName === displayName ? child : null
  )
