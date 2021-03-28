<template>
<div class="flex">
    <leftMenu name="Intro"></leftMenu>
    <div class=" mx-auto w-9/12 flex-wrap justify-around">
        <h1 class="text-4xl font-bold text-center my-5">User Interface</h1>
        <p class="m-4">Throughout your entire stay in MCRP you will be using the Interaction Menu. The Interaction Menu is our key to optimize and have fast-paced but immersive roleplay at all times:</p>
        <div class="flex justify-start flex-wrap">
            <div class="my-5 mx-5 w-full flex flex-wrap">
                <h2 class="w-full text-center text-2xl font-bold mb-5">
                    B menu
                </h2>
                <img class="mx-auto" src="../assets/images/userInterface/menu_b.png">
            </div>
            <div class=" mx-5 w-full">

                <div v-for="(items,index) in user" :key="index" class=" bg-gray-100 my-5 flex ">
    
                    <img class=" mr-5 my-auto iconsUser" :src="items.img_url" alt="">
                    <p> <span class="font-bold texte-lg">{{items.name}}</span> {{items.description}}</p>
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
            user: {
                    report: {
                        img_url: require("../assets/images/userInterface/report.png"),
                        name:"Help:",
                        description: "If you have an issue in game that needs Admin/Tester help please click this symbol"
                    },
                    vehicle: {
                        img_url: require("../assets/images/userInterface/car.png"),
                        name:"Vehicle:",
                        description: "Clicking this symbol lists all cars the player owns. If you car is missing select marker and it will show you on the map where your car is. You use this to also store/unstore your vehicles"
                    },
                    management: {
                        img_url: require("../assets/images/userInterface/management.png"),
                        name:"Player Management Menu:",
                        description: "Allows you to deal with corporations and groups"
                    },
                    clothes: {
                        img_url: require("../assets/images/userInterface/clothes.png"),
                        name:"Clothing Menu:",
                        description: "Allows you to remove your clothes"
                    },
                    door: {
                        img_url: require("../assets/images/userInterface/door.png"),
                        name:"Door Menu:",
                        description: "Allows you to open or/and close a specific door for a vehicle you own"
                    },
                    player: {
                        img_url: require("../assets/images/userInterface/user.png"),
                        name:"Player Interaction Menu:",
                        description: "Allows you to set your facial expressions, walking style and gives you a variety of things you can do to other players (a.e frisk them,seat or unseat them etc.)"
                    },
                    gun: {
                        img_url: require("../assets/images/userInterface/gun.png"),
                        name:"Weapon Menu:",
                        description: "Can be used to unholster a weapon you have equipped."
                    },
                     donation: {
                        img_url: require("../assets/images/userInterface/donation.png"),
                        name:"Donator Menu",
                        description: "Can only be seen by donors and can be used to set and view their special animations."
                    },
                     property: {
                        img_url: require("../assets/images/userInterface/house.png"),
                        name:"Property",
                        description: "This allows you to access the property information such as price and if it is currently owned."
                    }
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
