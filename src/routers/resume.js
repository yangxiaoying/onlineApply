
import Resume from '@/views/resume'
import Basic from '@/views/resume/basic'
import Edu from '@/views/resume/edu'
// import Ability from '@/views/resume/ability'
// import Cadre from '@/views/resume/cadre'
// import Work from '@/views/resume/work'
// import Family from '@/views/resume/family'
// import Subjective from '@/views/resume/subjective'
// import Investigation from '@/views/resume/investigation'
export default {
  redirect: '/resume/basic/:id',
  path: '/resume',
  component: Resume,
  children: [
    {
      path: 'basic/:id',
      name: 'Basic',
      component: Basic
    },
    {
      path: 'edu/:id',
      name: 'Edu',
      component: Edu
    },
    // {
    //   path: 'ability/:id',
    //   name: 'Ability',
    //   component: Ability
    // },
    // {
    //   path: 'cadre/:id',
    //   name: 'Cadre',
    //   component: Cadre
    // },
    // {
    //   path: 'work/:id',
    //   name: 'Work',
    //   component: Work
    // },
    // {
    //   path: 'family/:id',
    //   name: 'Family',
    //   component: Family
    // },
    // {
    //   path: 'subjective/:id',
    //   name: 'Subjective',
    //   component: Subjective
    // },
    // {
    //   path: 'investigation/:id',
    //   name: 'Investigation',
    //   component: Investigation
    // },
  ]
}
