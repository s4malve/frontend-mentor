import Article from '../components/Article'
import Header from '../components/Header'

export default () => (
  <main className="min-h-screen pb-16">
    <Header>
      <Header.H1>Simple, traffic-based pricing</Header.H1>
      <Header.P>
        Sign-up for our 30-day trial. No credit card required.
      </Header.P>
    </Header>
    <div className="max-w-lg -mt-10 mx-auto relative w-11/12">
      <Article />
    </div>
  </main>
)
