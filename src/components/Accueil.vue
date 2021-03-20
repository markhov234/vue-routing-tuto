<template>
<div class=" sm:container mx-3 sm:mx-auto border-gray-700 border-2">

    <h1 class=" text-center w-full  p-5 text-4xl bg-gray-400 text-blue-700 mb-3">{{lesTextes.intro.titre}}</h1>
    <p class="mx-3 font-ubuntu">{{lesTextes.intro.description}}</p>

</div>
</template>

<script>
import texte from './json/texte.json'

export default {
    data() {
        return {
            lesTextes: texte,

        }
    },
}
</script>

<style>

</style>
