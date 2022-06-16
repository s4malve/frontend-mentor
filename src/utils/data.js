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
  {
    id: 'github-user-search',
    title: 'Github user search',
    description:
      "In this project, you'll use the GitHub users API to pull profile data and display it. It's a great challenge if you're looking to practice working with a 3rd-party API.",
    languages: [contents.html, contents.css, contents.js, contents.api],
    difficulty: difficulties.junior,
    cover:
      'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/nr37our6z7faztmhwj9r.jpg',
  },
  {
    id: 'ip-address-tracker',
    title: 'Ip address tracker',
    description:
      "In this challenge, you'll be using two separate APIs together to create an IP Address Tracking app.",
    languages: [contents.html, contents.css, contents.js, contents.api],
    difficulty: difficulties.intermediate,
    cover:
      'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/zfgce1seaqfllpuktpai.jpg',
  },
]
