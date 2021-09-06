import {createRouter,createWebHistory} from 'vue-router';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachList from './pages/coaches/CoachList';
import CoachRegistration from './pages/coaches/CoachRegistration';
import ContactCoach from './pages/requets/ContactCoach';
import RequestReceived from './pages/requets/RequestReceived';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';

const router = createRouter({
    history: createWebHistory(),
 routes : [
     { path:'/',redirect: '/coaches' },
     { path:'/coaches',component: CoachList },
     { path:'/register',component:CoachRegistration },
     { path:'/requests',component: RequestReceived },
     { path:'/coaches/:id',component: CoachDetails,props:true, 
       children:  [{path: 'contact', component: ContactCoach}  ]
    },
     {path:'/:notfound(.*)',component:NotFound},
     {path:'/auth',component:UserAuth},

 ]

});
export default router;