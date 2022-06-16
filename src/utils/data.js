import projectConfig from './projectsStructure'

const { contents, difficulties } = projectConfig

export default [
  {
    id: 'expenses-chart-component',
    title: 'Expenses chart component',
    description:
      "In this challenge, you'll create a bar chart component from scratch. We provide a local JSON file, so you can add the chart data dynamically if you choose.",
    languages: [contents.html, contents.css, contents.js],
    difficulty: difficulties.junior,
    cover:
      'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/xhxtaym7uzypzb37rpcc.jpg',
  },
]
