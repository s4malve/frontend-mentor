import Header from '../components/Header'
import Switcher from '../components/Switcher'
import SocialCard from '../components/SocialCard'
import OverviewCard from '../components/OverviewCard'
import { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState([]),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://social-media-dashboard.herokuapp.com/')
      .then((res) => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="py-6 md:py-8 bg-slate-50 dark:bg-[#1e202a] text-slate-900 dark:text-slate-100 transition-[background-color,color] min-h-screen before:w-full before:h-[30%] relative before:absolute before:top-0 before:right-0 before:left-0 before:inline-block before:-z-[1] z-10 before:dark:bg-[#1f212e] before:bg-slate-100 before:rounded-br-xl before:rounded-bl-xl">
      <div className="container">
        <Header totalFollowers={data.totalFollowers}>
          <div className="flex items-center justify-between gap-x-3">
            <h3 className="font-semibold">Dark Mode</h3>
            <Switcher />
          </div>
        </Header>
        {loading && <div className="">Loading...</div>}
        {error && <div className="">Error {error.message}</div>}
        {!loading && !error && (
          <>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(224px,1fr))] grid-rows-[repeat(auto-fill,minmax(194px,1fr))] gap-4 my-11">
              {data.accounts.map(({ id, account, rating }) => (
                <li key={id} className={`bg-${account.name}`}>
                  <SocialCard
                    account={account}
                    rating={rating}
                    color={`bg-${account.name}`}
                  />
                </li>
              ))}
            </ul>
            <section className="flex-col flex gap-y-6">
              <h2 className="font-semibold text-xl">Overview - Today</h2>
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] grid-rows-[repeat(auto-fill,minmax(112px,1fr))] gap-5">
                {data.overview.map(({ id, account, info, rating }) => (
                  <li key={id}>
                    <OverviewCard
                      account={account}
                      info={info}
                      rating={rating}
                    />
                  </li>
                ))}
              </ul>
            </section>
          </>
        )}
      </div>
    </div>
  )
}

export default App
