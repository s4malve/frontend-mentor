import Card from '../components/Card'
import Header from '../components/Header'

import projects from '../utils/data'

export default () => {
  return (
    <div className="bg-dark text-slate-200">
      <div className="max-w-5xl mx-auto w-11/12">
        <Header />
        <main className="pb-8 pt-8 md:pt-12" id="projects">
          <h2 className="font-bold mb-8 text-3xl text-center">Projects</h2>
          <section className="grid mobile-s:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] mobile-xs:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
            {projects.map((project) => (
              <Card key={project.id} {...project} />
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}
