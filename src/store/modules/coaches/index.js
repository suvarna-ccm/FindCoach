import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
namespaced:true, 
 state(){
   return{
     lastFetch:null,
       coaches:[
            {
              id: 'c1',
              firstName: 'Suvarna',
              lastName: 'Sharma',
              areas: [ 'frontend', 'backend', 'career' ],
              description:
                "I'm Suvarna and I've worked as a frontend web developer for years. Let me help you to become a developer as well!",
              hourlyRate: 30
            },
            {
              id: 'c2',
              firstName: 'Bhoomi',
              lastName: 'Rana',
              areas: [ 'frontend', 'career' ],
              description:
                'I am Bhoomi and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
              hourlyRate: 30
            },
            {
              id: 'c4',
              firstName: 'Rashi',
              lastName: 'Sinha',
              areas: [ 'backend', 'career' ],
              description:
                'I am Rashi and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
              hourlyRate: 30
            },
            {
              id: 'c5',
              firstName: 'Rohit',
              lastName: 'Raina',
              areas: [ 'frontend', 'backend' ],
              description:
                'I am Rohit and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
              hourlyRate: 30
            }
            
          
       ]
   };

 },
getters,
actions,
mutations


}