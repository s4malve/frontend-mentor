import { useState } from 'react'

import Card from '../components/Card'
import Error from '../components/Error'
import MyMap from '../components/Map'
import Search from '../components/Search'

import useFetch from '../hooks/useFetch'

import IPValidator from '../utils/IPValidator'

import bgHero from '../images/pattern-bg.png'

export default function App() {
  const [query, setQuery] = useState('192.212.174.101')
  const { data, loading, error } = useFetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_1eWisyo4KVQ9uGSpfpTFGog0VTdSR&${
      IPValidator(query) ? `ipAddress=${query}` : `domain=${query}`
    }`,
    {}
  )

  return (
    <div className="">
      <header
        className="bg-cover text-slate-100 min-h-[252px]"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="flex-col flex items-center py-6 wrapper">
          <h1 className="mb-5">IP Address Tracker</h1>
          <div className="flex-col flex items-center relative w-full">
            <Search setQuery={setQuery} />
            {error || (data?.code && <Error error={error} data={data} />)}
            {!error && !data?.code && (
              <Card content={data} loading={loading && 'Loading...'} />
            )}
          </div>
        </div>
      </header>
      {data ? (
        <MyMap
          lat={data?.location?.lat || 0}
          lng={data?.location?.lng || 0}
          city={data?.location?.city}
          region={data?.location?.region}
          country={data?.location?.country}
        />
      ) : (
        <p>loading map...</p>
      )}
    </div>
  )
}
