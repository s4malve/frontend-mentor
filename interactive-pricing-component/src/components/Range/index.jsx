import { memo } from 'react'

const Range = ({ handleChange, percentage }) => {
  return (
    <input
      type="range"
      name=""
      id=""
      min={-2}
      max={2}
      step={1}
      className="w-full focus:shadow-lg shadow-teal-600"
      onChange={(e) => handleChange(+e.target.value)}
      defaultValue={-2}
      style={{
        backgroundImage: `linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235) ${percentage}%, rgb(234, 238, 251) ${percentage}%, rgb(234, 238, 251) 100%)`,
      }}
    />
  )
}

export default memo(Range)
