import Banner from '../components/Banner'
import Card from '../components/Card'

export default () => {
  return (
    <main className="bg-cream">
      <div
        className="w-11/12 max-w-xs mx-auto py-8 flex flex-col gap-y-3 justify-center items-center 
			min-h-screen"
      >
        <Banner />
        <Card />
      </div>
    </main>
  )
}
