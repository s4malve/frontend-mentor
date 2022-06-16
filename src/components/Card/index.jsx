export default ({ cover, id, title, description, languages, difficulty }) => {
  return (
    <article className="border flex-col flex max-w-sm p-4 rounded-md border-slate-800 gap-y-3">
      <a
        href={`/projects/${id}/index.html`}
        className="overflow-hidden rounded-md"
      >
        <img
          className="rounded-md transition-transform hover:scale-110"
          src={cover}
          alt={`${title} demo screenshot`}
        />
      </a>
      <h3 className="font-bold text-2xl">
        <a href={`/projects/${id}/index.html`} className="hover:underline">
          {title}
        </a>
      </h3>
      <div className="flex items-center justify-between">
        <ul className="flex font-bold gap-x-2">
          {languages.map(({ name, color }) => (
            <li key={name} style={{ color }} className="text-sm">
              {name}
            </li>
          ))}
        </ul>
        <span
          className="border capitalize flex font-bold rounded-md text-sm gap-x-2"
          style={{ borderColor: difficulty.color }}
        >
          <span
            className="px-2 py-1 rounded-tl-md rounded-bl-md"
            style={{ backgroundColor: difficulty.color }}
          >
            {difficulty.value}
          </span>
          <span className="pr-2 py-1" style={{ color: difficulty.color }}>
            {difficulty.name}
          </span>
        </span>
      </div>
      <p className="max-w-prose">{description}</p>
    </article>
  )
}
