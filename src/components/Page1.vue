<template>
<div class="flex">
    <leftMenu v-on:changeState='changerEtat'>
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
        changerEtat: function (valuefromLeftMenu) {
            this.stateControls = valuefromLeftMenu;
        }
    }

}
</script>

<style>

</style>
