import {createRouter, createWebHistory} from 'vue-router'
import Home from "../views/Home.vue"
import About from "../views/About.vue"

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/about", name: "About", component: About},

    {
        path: '/oyunlar/:id/:slug', 
        name: 'destination.show', 
        component: ()=>import('../views/DestinationShow.vue'),
        props: route=> ({...route.params, id: parseInt(route.params.id)}),
      },
      
    
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes,
        linkActiveClass: "active-link"
    }
)
export default router