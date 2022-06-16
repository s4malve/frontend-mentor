import { useState } from 'react'

import ProfileCard from '../../components/ProfileCard'
import SearchBar from '../../components/SearchBar'

import useOctokit from '../../hooks/useOctokit'
import NotFound from '../NotFound'

const Card = () => {
  const [username, setUsername] = useState('s4malve')

  const { user, error, loading } = useOctokit('GET /users/{username}', {
    username,
  })

  return (
    <>
      <SearchBar setUsername={setUsername} />
      {error ? (
        <NotFound username={username} error={error} />
      ) : (
        <ProfileCard {...user.data} loading={loading} />
      )}
    </>
  )
}

export default Card
