<template>
<div class="flex">
        <leftMenu name="Intro"></leftMenu>
       <div class=" flex flex-wrap mx-auto w-9/12">
       <img  class="max-h-mcLogo max-w-mcLogo w-auto h-auto mx-auto my-5 " src="../assets/images/intro/mafia_logo.png" alt="">
<p class="mx-5 text-2xl font-bold">This is an introduction tutorial to quickly show you around Los Santos and Mafia City Roleplay.
If you find anything you feel would benefit new players, or are confused on anything please ask on the #Support channel on discord. 
</p>
</div>
</div>
</template>

<script>
import leftMenu from './LeftMenu'
import texte from './json/texte.json'

export default {
    data() {
        return {
            lesTextes: texte,

        }
    },
    components:{
        leftMenu,
    }
}
</script>

<style>

</style>
