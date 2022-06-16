import { Octokit } from '@octokit/rest'
import { useCallback, useEffect, useState } from 'react'

export default (request = '', options = {}) => {
  const [user, setUser] = useState({}),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null)

  const fetchUser = useCallback(async () => {
    try {
      if (!request) return
      setLoading(true)
      setError(null)
      setUser({})

      const octokit = new Octokit({ auth: import.meta.env.GITHUB_TOKEN })
      const response = await octokit.request(request, options)

      setUser(response)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [options?.username])

  useEffect(() => {
    fetchUser()
  }, [options?.username])

  return { user, loading, error, fetchUser }
}
