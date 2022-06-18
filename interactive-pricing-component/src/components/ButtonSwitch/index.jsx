import { memo } from 'react'

const ButtonSwitch = ({ billing, setBilling }) => {
  return (
    <div
      className={`btn-switch ${billing === 'year' ? 'active' : ''}`}
      onClick={() =>
        setBilling((prev) => (prev === 'month' ? 'year' : 'month'))
      }
    >
      <div />
    </div>
  )
}

export default memo(ButtonSwitch)
