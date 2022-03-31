import {createRouter, createWebHistory} from "vue-router";
import UserProfile from "../components/UserProfile";

const routes = [
    {
        path: '/users/:userId',
        component: UserProfile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;