const people = [
  {
    id: '1',
    name: 'Gonzalo Ramiro Alvarez Campos',
    birth: '02-11-1990',
    sex: 'male',
    careerStart: '2018',
    linkedIn: '/gonzaloalvarezcampos/',
  },
  {
    id: '2',
    name: 'Anabella Lucia Sciangula',
    birth: '05-01-1996',
    sex: 'female',
    careerStart: '2024',
    linkedIn: '/anabella-sciangula/',
  },
];

const projects = [
  {
    id: '1',
    name: 'Avant',
    text: 'Full stack project for Avant, a US loan company. We use React with Remix.run and PostCss to provide a swift application. Use of cypress for utest.',
    skills_id: ['1', '2', '3', '4', '8', '13', '14', '15', '17', '18'],
  },
  {
    id: '2',
    name: 'eVestment',
    text: 'Web development focused in VueJs (use of state, store(vuex), router), worked with Highcharts and VueJs to make reusable components for the clients page. And minor exp with backend using .net core and nodejs.',
    skills_id: ['1', '4', '5', '20', '7', '19', '2'],
  },
  {
    id: '3',
    name: 'Cliengo',
    text: 'CRM App, conversation handler, using React Js, Css, Router, Redux, Axios. Unit Testing with JestJs, Deployment with AWS/Heroku.',
    skills_id: ['1', '2', '3', '4', '20', '21', '14', '16'],
  },
  {
    id: '4',
    name: 'Marklogic',
    text: 'Working in a semantics data base project for Yale University.',
    skills_id: ['1'],
  },
  {
    id: '5',
    name: 'Smile Direct Club',
    text: 'Web development with frontend technologies such VueJs and NuxtJs focus on page performance using nuxt server-side rendering. Use of vue-axios, bootstrap-vue, ECMA 6+.',
    skills_id: ['1', '2', '3', '4', '20'],
  },
];

const jobs = [
  {
    id: '1',
    name: 'Globant',
    text: 'Hired as Jr Web developer.',
    date: ['2018', '2020'],
    people_id: '1',
    project_id: ['2', '5'],
  },
  {
    id: '2',
    name: 'Cliengo',
    text: 'Hired as Jr Web developer.',
    date: ['2020', '2021'],
    people_id: '1',
    project_id: ['3'],
  },
  {
    id: '3',
    name: 'Endava',
    text: 'Hired as Jr Web developer.',
    date: ['2021', '2022'],
    people_id: '1',
    project_id: ['4'],
  },
  {
    id: '4',
    name: 'Qubika',
    text: 'Hired as Jr Web developer.',
    date: ['2022'],
    people_id: '1',
    project_id: ['1'],
  },
  {
    id: '4',
    name: 'Laburo falopa Anita',
    text: 'Hired as Jr Web developer.',
    date: ['2022'],
    people_id: '2',
    project_id: ['1'],
  },
];

const skills = [
  {
    id: '1',
    name: 'Javascript',
    people_id: ['1', '2'],
  },
  {
    id: '2',
    name: 'Css',
    people_id: ['1', '2'],
  },
  {
    id: '3',
    name: 'React',
    people_id: ['1', '2'],
  },
  {
    id: '4',
    name: 'HTML',
    people_id: ['1', '2'],
  },
  {
    id: '5',
    name: 'Vue',
    people_id: ['1'],
  },
  {
    id: '6',
    name: 'Bootstrap',
    people_id: ['2'],
  },
  {
    id: '7',
    name: 'Highcharts',
    people_id: ['1'],
  },
  {
    id: '8',
    name: 'Remix.run',
    people_id: ['1'],
  },
  {
    id: '9',
    name: 'Tailwind',
    people_id: ['1', '2'],
  },
  {
    id: '10',
    name: 'NodeJs',
    people_id: ['1'],
  },
  {
    id: '11',
    name: 'ExpressJs',
    people_id: ['1'],
  },
  {
    id: '12',
    name: 'NPM',
    people_id: ['1', '2'],
  },
  {
    id: '13',
    name: 'JIRA',
    people_id: ['1', '2'],
  },
  {
    id: '14',
    name: 'Cypress',
    people_id: ['1'],
  },
  {
    id: '15',
    name: 'GIT',
    people_id: ['1', '2'],
  },
  {
    id: '16',
    name: 'Redux',
    people_id: ['1', '2'],
  },
  {
    id: '17',
    name: 'GraphQL',
    people_id: ['1'],
  },
  {
    id: '18',
    name: 'English',
    people_id: ['1', '2'],
  },
  {
    id: '19',
    name: 'Storybook',
    people_id: ['1'],
  },
  {
    id: '20',
    name: 'Axios',
    people_id: ['1'],
  },
  {
    id: '21',
    name: 'React Style Component',
    people_id: ['1'],
  },
];

export default { people, projects, jobs, skills };
