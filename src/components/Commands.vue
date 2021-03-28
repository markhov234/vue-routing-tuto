<template>
<div class="flex">
    <leftMenu name="Intro"></leftMenu>
    <div class=" mx-auto w-9/12 flex-wrap justify-around">
        <h1 class="text-4xl font-bold text-center my-5">
            Commmands
        </h1>
        <p class="m-4">Theses are the majorities of commands that you are going to use during your stay in Mafia City</p>
        <div class="flex justify-start flex-wrap">
            <div class="w-full flex flex-wrap">
                <div class="w-1/6 mr-24">
                    <h2 class=" ml-5 text-2xl font-bold mb-5">
                        Commands
                    </h2>
                </div>
                <div class="ml-6">
                    <h2 class="sm:w-full text-2xl font-bold mb-5">
                        The action
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
                me: {
                    name: "/me",
                    description: "Is to perform a roleplay act for example /me would extend his right arm out to shake the man's hand."
                },
                mellow: {
                    name: "/mellow",
                    description: "Used to send a local action with a lower distance (Essentially a /me with a lower radius of showing up on the screen for others)"
                },
                do: {
                    name: "/do",
                    description: "Is used as a factual statement or a descriptive term, /do I would not resist or /do would be carrying a cup of coffee"
                },
                dolow: {
                    name: "/dolow",
                    description: "Used to send a local response with a lower distance"
                },
                time: {
                    name: "/time",
                    description: "Shows the server time and date in EST in the chat box, it also shows  you the remainder of your prison sentence, and the amount of time until your next paycheck."
                },
                freq: {
                    name: "/freq",
                    description: "Used to set your Radios Frequency, in game, for example /freq 112 will set your radio to channel 112"
                },
                radio: {
                    name: "/radiovolume",
                    description: "Changes the volume of the radio."
                },
                voip: {
                    name: "/voipvolume",
                    description: "Change the volume of players using VOIP"
                },
                phone: {
                    name: "/phone",
                    description: "Used to show your phone number in that chat box."
                },
                hangup: {
                    name: "/hangup",
                    description: "Used to hang the phone up after you have finished a call."
                },
                q: {
                    name: "/q",
                    description: "Used to close your connection to the server."
                },
                sell: {
                    name: "/sellvehicle",
                    description: "Used to sell your vehicle to a player"
                },
                acceptVehi: {
                    name: "/acceptvehiclesale",
                    description: "Used to accept the sale of a vehicle."
                },
                getVehi: {
                    name: "/getvehicleid",
                    description: "Used to get a vehicle’s ID."
                },
                 showVehi: {
                    name: "/showvehicles",
                    description: "Used to show your vehicles"
                },
                pm: {
                    name: "/pm [id]",
                    description: "Used to send a private message to another player"
                },
                block: {
                    name: "/blockpm [id]",
                    description: "Used to block an individual from sending you a private message"
                },
                newbie: {
                    name: "/n",
                    description: "chat for Q&A only"
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
