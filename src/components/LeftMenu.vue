<template>
<div class="w-72 bg-gray-700 relative">

    <img class="block mt-1 m-auto" src="https://fakeimg.pl/200x100/">
    <div class="flex justify justify-around flex-wrap">
        <router-link class="btn" to="/">Intro</router-link>
        <router-link class="btn" to="Controls">Controls</router-link>
        <router-link class="btn" to="UserInterface">User Interface</router-link>

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
