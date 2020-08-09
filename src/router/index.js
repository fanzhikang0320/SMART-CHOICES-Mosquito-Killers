import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// import Home from '@/views/Home'
import Mosquito from '@/views/Mosquito'
import Disclosure from '@/views/Disclosure'
import Terms from '@/views/Terms'
import About from '@/views/About'
import Contact from '@/views/Contact'
import Privacy from '@/views/Privacy'
const routes = [
    {
        path: '/',
        name: 'mosquito',
        component: Mosquito
    },
    {
        path: '/disclosure',
        name: 'disclosure',
        component: Disclosure
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: Privacy
    },
    {
        path: '/terms',
        name: 'terms',
        component: Terms
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
];


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;