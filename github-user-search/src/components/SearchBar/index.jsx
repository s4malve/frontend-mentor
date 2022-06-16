import { memo, useCallback, useState } from 'react'

import Search from '../icons/Search'

const SearchBar = ({ setUsername }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()

      const formData = new FormData(e.target)
      const username = formData.get('username')
      setUsername(username)
    },
    [setUsername]
  )

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search" className="flex items-center gap-x-3 w-full mb-4">
        <div className="justify-between flex items-center gap-x-5 w-full py-2 pl-4 pr-2 dark:bg-slate-800 bg-slate-200 rounded-lg focus-within:shadow-sm dark:focus-within:shadow-slate-800 focus-within:shadow-slate-800/50">
          <Search className="shrink-0" />
          <input
            type="search"
            name="username"
            id="username"
            placeholder="Search GitHub username..."
            className="w-full bg-transparent outline-none whitespace-nowrap overflow-x-hidden text-ellipsis"
            value={query || ''}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type={'submit'}
            className="py-2 px-6 hover:bg-blue-600 active:bg-blue-700 font-semibold rounded-lg bg-blue-500 text-slate-100"
          >
            Search
          </button>
        </div>
      </label>
    </form>
  )
}
export default memo(SearchBar)
