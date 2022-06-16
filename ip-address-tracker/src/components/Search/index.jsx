export default function Search({ setQuery }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const { search } = Object.fromEntries(formData)
    setQuery(search)
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for any IP address or domain."
        className="py-3 px-4 w-full rounded-xl"
        required
      />
      <button type="submit" className="btn btn-primary">
        &gt;
      </button>
    </form>
  )
}
