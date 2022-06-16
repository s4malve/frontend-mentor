import { useEffect, useState } from 'react'

export default function useFetch(url = '', options = {}) {
  const [data, setData] = useState(null),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(null)

  const fetchData = async () => {
    try {
      setError(null)
      const response = await fetch(url, options)
      const json = await response.json()

      setData(json)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, loading, error }
}
