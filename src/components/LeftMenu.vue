<template>
<div class="w-72 bg-gray-700 h-screen">

    <img class="block mt-1 m-auto" src="https://fakeimg.pl/200x100/">
    <div class="flex justify justify-around flex-wrap">
        <button class="btn"
         v-bind:class=" {active : introActive}" v-on:click='changeState'>Intro</button>
        <button class="btn" 
          v-bind:class=" {active : controlsActive}" 
        v-on:click='changeState'>Controls</button>
        <button class="btn" v-on:click='changeState'>User Interface</button>
        <button class="btn" v-on:click='changeState'>Communication</button>
        <button class="btn" v-on:click='changeState'>Jobs</button>
        <button class="btn" v-on:click='changeState'>Faqs</button>
        <button class="btn" v-on:click='changeState'>Rules</button>
        <button class="btn" v-on:click='changeState'>Contact us</button>


    </div>

</div>
</template>

<script>
import texte from './json/texte.json'

export default {
    data() {
        return {
            lesTextes: texte,
            stateControls: false,
            controlsActive:false,
            introActive:true,

        }
    },
    methods: {
        changeState: function () {
            if (this.stateControls == true) {
                this.stateControls = false;
                this.controlsActive = false;

            } else {
                this.stateControls = true;
                this.controlsActive = true;
                this.introActive=false;

            }

            this.$emit('changeState', this.stateControls)
        }
    }
}
</script>

<style>

</style>
