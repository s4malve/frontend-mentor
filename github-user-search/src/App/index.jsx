import Card from '../components/Card'
import DarkModeBtn from '../components/DarkModeBtn'

export default () => {
  return (
    <div className="dark:bg-slate-900 bg-slate-100 text-slate-900 dark:text-slate-100">
      <div className="w-11/12 max-w-2xl mx-auto min-h-screen py-6">
        <header className="flex items-center justify-between mb-7">
          <h1 className="font-bold text-xl tracking-wide">devfinder</h1>
          <DarkModeBtn />
        </header>
        <Card />
      </div>
    </div>
  )
}
