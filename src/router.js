import { createRouter, createWebHistory } from "vue-router"
import CoachesList from "./pages/coaches/CoachesList.vue"
import CoachDetail from "./pages/coaches/CoachDetail.vue"
import CoachRegistration from "./pages/coaches/CoachRegistration.vue"
import ContactCoach from "./pages/requests/ContactCoach.vue"
import RequestsRecieved from "./pages/requests/RequestsRecieved.vue"
// import NotFound from "./pages/NotFound.vue"



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/coaches'
        },
        {
            path: '/coaches',
            component: CoachesList,
        },
        {
            path: '/coaches/:coachId',
            component: CoachDetail,
            props: true,
            children: [
                {
                    path: "contact",
                    component: ContactCoach,
                }
            ]
        },
        {
            path: '/register',
            component: CoachRegistration,
        },
        {
            path: '/requests',
            component: RequestsRecieved,
        },
        // {
        //     path: '/:notFound(.*)',
        //     component: NotFound,
        // }

    ]
})

export default router;