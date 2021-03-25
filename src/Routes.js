import Accueil from './components/Accueil.vue'
import Controls from './components/Controls.vue'
import UserInterface from './components/UserInterface.vue'




export default [{
        path: '/',
        component: Accueil
    },
    {
        path: '/Controls',
        component: Controls,
        props: true,
    },
    {
        path: '/UserInterface',
        component: UserInterface,
    },

]