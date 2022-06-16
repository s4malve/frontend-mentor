import ArrowUp from '../../components/Icon/ArrowUp'

export default ({
  rating: { count, positive, size },
  info: { origin, value },
  account: { logo },
}) => {
  return (
    <div className="card">
      <header className="flex items-center justify-between mb-4">
        <h3 className="capitalize font-semibold text-slate-400">{origin}</h3>
        <img src={logo} alt="" className="w-5" />
      </header>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl card-title">{value}</h2>
        <p className={`rating ${positive ? 'text-green-600' : 'text-red-600'}`}>
          <ArrowUp className={positive ? 'rotate-0' : 'rotate-180'} /> {count}{' '}
          {size}
        </p>
      </div>
    </div>
  )
}
