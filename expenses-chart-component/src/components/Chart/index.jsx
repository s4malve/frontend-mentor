import data from '../../../data.json'

export default () => {
  const heightiest = Math.max(...data.map(({ amount }) => amount))

  return (
    <div className="grid grid-rows-1 grid-cols-7 gap-x-2 min-h-[140px]">
      {data.map(({ day, amount }) => (
        <Bar
          day={day}
          amount={amount}
          heightiest={heightiest === amount}
          key={day}
        />
      ))}
    </div>
  )
}

const Bar = ({ day, amount, heightiest }) => {
  return (
    <div className="flex flex-col items-center justify-end bar">
      <span
        className={`text-sm bg-stone-900 text-stone-100 rounded-md opacity-0 p-1 transition-opacity font-semibold mb-3`}
      >
        ${amount}
      </span>
      <div
        className={`w-full rounded-[5px] inline-block ${
          heightiest
            ? 'bg-cyan hover:bg-cyan/70'
            : 'bg-soft-red hover:bg-soft-red/70'
        } h-full relative`}
        style={{
          maxHeight: `${amount}%`,
        }}
      />
      <span className="text-medium-brown text-sm">{day}</span>
    </div>
  )
}
