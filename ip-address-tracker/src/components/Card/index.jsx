export default function Card({ content, loading }) {
  const results = [
    {
      title: 'ip address',
      content: loading || content?.ip,
    },
    {
      title: 'location',
      content:
        loading || `${content?.location.region}, ${content.location.country}`,
    },
    {
      title: 'timezone',
      content: loading || `UTC${content?.location.timezone}`,
    },
    {
      title: 'isp',
      content: loading || content?.isp,
    },
  ]

  return (
    <ul className="card">
      {results.map(({ title, content }) => (
        <li key={title}>
          <span className="uppercase text-slate-500 text-[12px] font-semibold">
            {title}
          </span>
          <h2>{content}</h2>
        </li>
      ))}
    </ul>
  )
}
