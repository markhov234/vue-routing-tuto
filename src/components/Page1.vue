<template>
<div class="flex">
    <leftMenu v-on:changeStateCont='changerEtatCont' v-on:changeStateInt="changerEtatInt">
    </leftMenu>
    <div class=" mx-auto w-8/12 flex-wrap justify-around">
        <intro v-if="stateIntro"></intro>
        <controls v-if="stateControls"></controls>
    </div>

</div>
</template>

<script>
import leftMenu from './LeftMenu'
import controls from './Controls'
import intro from './Intro'

export default {
    name: 'page1',
    data() {
        return {

            stateControls: false,
            stateIntro: true,

        }

    },
    components: {
        leftMenu,
        controls,
        intro
    },
    methods: {
        changerEtatCont: function (valuefromLeftMenu) {
            this.stateControls = valuefromLeftMenu;
            this.stateIntro=false;
            console.log('allo je suis dans controls')

        },
         changerEtatInt: function (valuefromLeftMenu) {
            this.stateIntro = valuefromLeftMenu;
            this.stateControls=false;
                console.log('allo je suis dans Intro')


        }
    }

}
</script>

<style>

</style>
