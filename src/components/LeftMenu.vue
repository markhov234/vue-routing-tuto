<template>
<div class="w-72 bg-gray-700 h-screen">

    <img class="block mt-1 m-auto" src="https://fakeimg.pl/200x100/">
    <div class="flex justify justify-around flex-wrap">
        <button class="btn" v-bind:class=" {active : introActive}" v-on:click='changeStateIntro'>Intro</button>
        <button class="btn" v-bind:class=" {active : controlsActive}" v-on:click='changeStateControl'>Controls</button>
        <button class="btn">User Interface</button>
        <button class="btn">Communication</button>
        <button class="btn">Jobs</button>
        <button class="btn">Faqs</button>
        <button class="btn">Rules</button>
        <button class="btn">Contact us</button>

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
            controlsActive: false,
            introActive: true,
            stateIntro: true,

        }
    },
    methods: {
        changeStateControl: function () {
            if (this.stateControls == true) {
                this.stateControls = false;
                this.controlsActive = false;

            } else {
                this.stateControls = true;
                this.controlsActive = true;
                this.introActive = false;
                this.stateIntro = false;
            }

            this.$emit('changeStateCont', this.stateControls)
        },
        changeStateIntro: function () {
            if (this.stateIntro == true) {
                this.stateControls = false;
                this.controlsActive = false;

            } else {
                this.stateIntro = true;
                this.introActive = true;
                  this.stateControls = false;
                this.controlsActive = false;

            }

            this.$emit('changeStateInt', this.stateIntro)
        }
    }
}
</script>

<style>

</style>
