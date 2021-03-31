import Accueil from './components/Accueil.vue'
import Controls from './components/Controls.vue'
import UserInterface from './components/UserInterface.vue'
import Commands from './components/Commands.vue'
import Blips from './components/Blips.vue'
import Jobs from './components/Jobs.vue'





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
    {
        path: '/Commands',
        component: Commands,
    },
    {
        path: '/Blips',
        component: Blips,
    },
    {
        path: '/Jobs',
        component: Jobs,
    },

]