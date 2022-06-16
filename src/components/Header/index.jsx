import DownArrow from '../../components/icons/DownArrow'

export default () => {
  return (
    <header className="grid min-h-screen relative w-full place-content-center">
      <h1 className="font-code text-2xl md:text-6xl lg:text-7xl grid grid-cols-[auto_1fr] grid-rows-[repeat(4,auto)] gap-y-4 gap-x-4">
        <span className="block col-end-3 col-start-1">
          <span className="text-pale-red">{'==>'}</span> All the{' '}
          <span className="text-pale-green">=== </span>
          <span className="text-pale-purple">{'{'}</span>
        </span>
        <span className="block col-end-3 col-start-1">
          challenges in <span className="text-pale-purple">≹ </span>
          <span className="text-pale-red">⩭</span>
        </span>
        <span className="flex items-center max-w-[200px] mr-8 row-end-4 row-start-3 text-base leading-6">
          Press to start seeing my versions
        </span>
        <a
          href="/#projects"
          className="col-start-1 font-bold py-3 rounded-md row-start-4 self-center text-base text-center w-full h-fit bg-pale-red text-slate-200 hover:bg-pale-red/90 active:bg-pale-red/80"
        >
          Start
        </a>
        <span className="block col-end-3 col-start-2">
          just <span className="text-pale-green">!=</span>
        </span>
        <span className="block col-start-2 self-center">one place</span>
      </h1>
      <div className="absolute flex justify-center left-0 right-0 bottom-4 text-slate-200">
        <a href="#projects" className="hover:animate-color-change">
          <DownArrow />
          <DownArrow className="-mt-8" />
        </a>
      </div>
    </header>
  )
}
