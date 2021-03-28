<template>
<div class="flex">
    <leftMenu name="Intro"></leftMenu>
    <div class=" mx-auto w-9/12 flex-wrap justify-around">
        <h1 class="text-4xl font-bold text-center my-5">
            Controls
        </h1>
        <p class="m-4">Theses are the controls that you are going to use during your stay in Mafia City</p>
        <div class="flex justify-start flex-wrap">
            <div class="w-full flex flex-wrap">
                 <img class="my-5" src="../assets/images/controls/img_key.png" alt="">
                <div class="w-1/6 mr-24">
                    <h2 class=" ml-5 text-2xl font-bold mb-5">
                        Key
                    </h2>
                </div>
                <div class="ml-6">
                    <h2 class="sm:w-full text-2xl font-bold mb-5">
                        Function
                    </h2>
                </div>
            </div>
            <div class=" w-full">
                <div class="flex flex-wrap">
                    <div class=" bg-gray-100 pl-2 py-3 my-4 ml-5 border-b-2 border-pink-700  flex flex-wrap w-full" :key="index" v-for="(items, index) in commands">
                        <p class=" my-auto w-1/6 mr-24 text-lg text-pink-600 font-bold italic">
                            {{items.name}}
                        </p>
                        <p class=" my-auto w-4/6">
                            {{items.description}}
                        </p>
                    </div>
                </div>

            </div>

        </div>

    </div>
</div>
</template>

<script>
import leftMenu from './LeftMenu'
import textes from './json/texte.json'

export default {
    data() {
        return {
            lesTextes: textes,
            commands: {
                n: {
                    name: "N",
                    description: "Hold down to talk using VOIP"
                },
                m: {
                    name: "M",
                    description: "Hold down to talk on your Radio or a phone call."
                },
                y: {
                    name: "Y",
                    description: "Any circles on the map such as shops, Car showrooms require the “Y” key to interact with "
                },
                k: {
                    name: "K",
                    description: "The “K” key is used to lock doors in both buildings and cars."
                },
                i: {
                    name: "I",
                    description: "The “I” key is used to open inventory. This will also show the paycheck you can collect from the bank."
                },
                o: {
                    name: "O",
                    description: "The “O” key will open the emote’s list. To cancel a performing an emote press “O” key again and select cancel emote."
                },
                f: {
                    name: "F",
                    description: "Enter Car as driver"
                },
                g: {
                    name: "G",
                    description: "Enter Car as Passenger"
                },
                p: {
                    name: "P",
                    description: "Pause Menu"
                },
                f1: {
                    name: "F1",
                    description: "Enter RAGE MP menu"
                },
                f2: {
                    name: "F2",
                    description: "The “F2” key will allow you to use your cursor, press again to disable. This can be used to accept job offers."
                },
                f4: {
                    name: "F4",
                    description: "The “F4” key will bring up  this help guide in future"
                },
                f6: {
                    name: "F6",
                    description: "If prompted that you will be kicked for AFK press this key to stop the kick timer."
                },
                f7: {
                    name: "F7",
                    description: "Change your voice level i.e. whisper and shout."
                },
                f8: {
                    name: "F8",
                    description: "Reset your VOIP - Also known IC as a Cough Drop"
                },
                f9: {
                    name: "F9",
                    description: "Media menu"
                },
                f10: {
                    name: "F10",
                    description: "Change the ID’s visible over the players head."
                },
            }
        }
    },
    methods: {},
    components: {
        leftMenu,
    }
}
</script>

<style>

</style>
