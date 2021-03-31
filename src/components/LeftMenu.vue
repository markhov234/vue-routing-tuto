<template>
<div class="w-72 bg-gray-900 relative">

    <img class="block mt-1 m-auto" src="../assets/images/intro/mafia_logo.png">
    <div class="flex justify justify-around flex-wrap">
        <router-link class="btn" to="/">Intro</router-link>
        <router-link class="btn" to="Controls">Controls</router-link>
        <router-link class="btn" to="UserInterface">User Interface</router-link>
        <router-link class="btn" to="Commands">Commands</router-link>
        <router-link class="btn" to="Blips">Blips</router-link>
        <router-link class="btn" to="Jobs">Jobs</router-link>
        <router-link class="btn" to="Communication">Communication</router-link>
        <router-link class="btn" to="Faqs">Faqs</router-link>
        <router-link class="btn" to="FirstStep">Your First Steps</router-link>
        <router-link class="btn" to="Rules">Rules</router-link>
    </div>

</div>
</template>

<script>
import texte from './json/texte.json'

export default {
    data() {
        return {
            lesTextes: texte,
            introEtat: false,
            controlsEtat: false,

        }
    },
    methods: {
    },
    props: [
        "name"
    ]
}
</script>

<style>

</style>
