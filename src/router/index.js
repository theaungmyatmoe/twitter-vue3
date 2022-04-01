import {createRouter, createWebHistory} from "vue-router";
import UserProfile from "../components/UserProfile";
import Home from '../components/Home'
import store from '../store/index'

const routes = [{
    path: '/', component: Home, name: 'home'
}, {
    path: '/users/:userId', component: UserProfile, name: 'profile'
}, {
    path: '/admin', name: 'admin', meta: {
        requiresAdmin: true
    }
}]

const router = createRouter({
    history: createWebHistory(), routes
})

router.beforeEach((to, from) => {
    const user = store.user
    if (user) {
        const isAdmin = user.isAdmin
        if (to.meta.requiresAdmin && !isAdmin) {
            return {
                name: 'home',
            }
        }
    }

})

export default router;