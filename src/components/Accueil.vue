<template>
<div class="flex h-full">
        <leftMenu name="Intro"></leftMenu>
       <div class=" mx-auto w-8/12 flex-wrap justify-around">
    <h1 class="text-3xl font-bold text-center my-5">Introduction to mafia city</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos magnam consequatur a fugit, reprehenderit omnis temporibus architecto deleniti, perspiciatis voluptates, ipsam fugiat ex itaque earum velit aperiam officia eum.</p>
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
