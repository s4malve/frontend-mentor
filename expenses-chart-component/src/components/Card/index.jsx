import Chart from '../Chart'
import data from '../../../data.json'

export default ({ children }) => {
  const days = data.map(({ days }) => days).length

  return (
    <div className="rounded-lg bg-very-pale-orange p-6 text-dark-brown grid gap-y-3 w-full">
      <h2 className="font-bold text-2xl">Spending - Last {days} days</h2>
      <Chart />
      {children}
      <footer className="border-t border-medium-brown/30 pt-4 flex items-end justify-between text-base">
        <div>
          <p className="text-medium-brown">Total this month</p>
          <span className="font-bold text-2xl text-dark-brown">$478.33</span>
        </div>
        <div className="grid justify-end text-sm">
          <span className="font-bold text-right">+2.4%</span>
          <span className="text-medium-brown">from last month</span>
        </div>
      </footer>
    </div>
  )
}
