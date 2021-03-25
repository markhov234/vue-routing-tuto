<template>
<div class="flex">
     <leftMenu name="controls"> </leftMenu>
     <div class=" mx-auto w-8/12 flex-wrap justify-around">
    <h1 class="text-3xl font-bold text-center my-5">Controls</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos magnam consequatur a fugit, reprehenderit omnis temporibus architecto deleniti, perspiciatis voluptates, ipsam fugiat ex itaque earum velit aperiam officia eum.</p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum minima alias quis quia autem, modi facere. Blanditiis, explicabo cum dolores, unde harum consectetur, rem repellat cupiditate sunt sapiente vero impedit?</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tenetur officiis eius tempora, quos fugit quisquam sed debitis! Fuga dicta perferendis consequatur temporibus labore nostrum, quidem amet vitae a neque?</p>
</div>
</div>
</template>

<script>
import leftMenu from './LeftMenu'

export default {
    data() {
        return {

        }
    },
    methods: {},
    components: {
        leftMenu
    },
    props:[
'name'
    ]
}
</script>

<style>

</style>
