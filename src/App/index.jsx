import Card from '../components/Card'
import Header from '../components/Header'

import projects from '../utils/data'

export default () => {
  return (
    <div className="bg-dark text-slate-200">
      <div className="max-w-5xl mx-auto w-11/12">
        <Header />
        <main className="pb-8 pt-28" id="projects">
          <h2 className="font-bold mb-8 text-3xl text-center">Projects</h2>
          {projects.map((project) => (
            <Card key={project.id} {...project} />
          ))}
        </main>
      </div>
    </div>
  )
}
