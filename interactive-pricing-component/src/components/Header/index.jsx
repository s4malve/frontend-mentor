import getChildrenOnDisplayName from '../../utils/getChildrenOnDisplayName'

const Header = ({ children }) => {
  const h1 = getChildrenOnDisplayName(children, 'H1')
  const p = getChildrenOnDisplayName(children, 'P')

  return (
    <header className="relative before:bg-contain before:block before:bg-no-repeat before:inset-0 min-h-[50vh] grid place-content-center text-center bg-pattern bg-cover before:absolute before:bg-pattern-cirlcles bg-center before:w-[150px] before:h-[150px] before:m-auto justify-items-center text-stone-400 gap-y-3">
      {h1}
      {p}
    </header>
  )
}

const H1 = ({ children }) => (
  <h1 className="font-bold text-3xl text-blue-900">{children}</h1>
)
H1.displayName = 'H1'
Header.H1 = H1

const P = ({ children }) => (
  <p className="max-w-[200px] sm:max-w-none">{children}</p>
)
P.displayName = 'P'
Header.P = P

export default Header
