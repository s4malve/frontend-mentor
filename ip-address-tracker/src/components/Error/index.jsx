export default function Error({ error, data }) {
  return (
    <div className="card">
      <h2>{error?.name || data.messages}</h2>
      <p>{error?.message || (data.code && `code: ${data.code}`)}</p>
    </div>
  )
}
