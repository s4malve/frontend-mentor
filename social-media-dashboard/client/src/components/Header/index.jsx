export default ({ children, totalFollowers }) => {
  return (
    <header className="flex-col flex text-slate-400 md:justify-between md:flex-row">
      <div className="border-b mb-4 pb-4 border-stone-300 md:border-transparent md:pb-0 md:mb-0">
        <h1 className="font-bold text-lg text-slate-900 dark:text-slate-100">
          Social Media Dashboard
        </h1>
        <p className="font-semibold">
          Total Followers: {totalFollowers ? totalFollowers : 'Loading...'}
        </p>
      </div>
      {children}
    </header>
  )
}
