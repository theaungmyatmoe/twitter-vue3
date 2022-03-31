import {createRouter, createWebHistory} from "vue-router";
import UserProfile from "../components/UserProfile";
import Home from '../components/Home'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/users/:userId',
        component: UserProfile,
        name: 'profile'
    },
    {
        path: '/admin',
        name: 'admin',
        meta: {
            requiresAdmin: true
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    const isAdmin = false
    if (to.meta.requiresAdmin && !isAdmin) {
        return {
            name: 'home',
        }
    }
})

export default router;