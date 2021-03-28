<template>
<div class="flex">
    <leftMenu name="Blips"></leftMenu>
    <div class=" mx-auto w-9/12 flex-wrap justify-around">
        <h1 class="text-4xl font-bold text-center my-5">Blips</h1>
        <p class="m-4">These are the icon for the city</p>
        <div class="flex justify-start flex-wrap">
            <div class=" justify-around mx-5 flex flex-wrap w-full">

                <div v-for="(items,index) in user" :key="index" class=" bg-gray-100 my-5 flex w-2/5 ">

                    <img class=" mr-5 my-auto iconsUser" :src="items.img_url" alt="">
                    <p> <span class="font-bold texte-lg">{{items.name}}</span></p>
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
                governement: {
                    img_url: require("../assets/images/blips/flag.png"),
                    name: "Governement Building",
                },
                gunStore: {
                    img_url: require("../assets/images/blips/gun.png"),
                    name: "Gun Store",
                },
                 bank: {
                    img_url: require("../assets/images/blips/dollars.png"),
                    name: "Central banks",
                },
                store: {
                    img_url: require("../assets/images/blips/gun.png"),
                    name: "Convenience Store",
                },
                 mod: {
                    img_url: require("../assets/images/blips/mod.png"),
                    name: "Mod Shop",
                },
                mining: {
                    img_url: require("../assets/images/blips/mining.png"),
                    name: "Mining Office",
                },
                 impound: {
                    img_url: require("../assets/images/blips/impound.png"),
                    name: "Impound Lot",
                },
                 correction: {
                    img_url: require("../assets/images/blips/cuffs.png"),
                    name: "Departement of Correction",
                },
                 fastFood: {
                    img_url: require("../assets/images/blips/fastFood.png"),
                    name: "Fast Food",
                },
                furniture: {
                    img_url: require("../assets/images/blips/furniture.png"),
                    name: "Furniture Shop",
                },
                clothing: {
                    img_url: require("../assets/images/blips/clothing.png"),
                    name: "Clothing Store",
                },
                 club: {
                    img_url: require("../assets/images/blips/club.png"),
                    name: "Club",
                },
                 rental: {
                    img_url: require("../assets/images/blips/rental.png"),
                    name: "Rental",
                },
                gas: {
                    img_url: require("../assets/images/blips/gas.png"),
                    name: "Gas Station",
                },
                 trucking: {
                    img_url: require("../assets/images/blips/trucking.png"),
                    name: "Trucking Job",
                },
                 restaurant: {
                    img_url: require("../assets/images/blips/restaurant.png"),
                    name: "Restaurant",
                },
                tattoo: {
                    img_url: require("../assets/images/blips/tattoo.png"),
                    name: "Tattoo Shop",
                },
                motorVehicle: {
                    img_url: require("../assets/images/blips/departement.png"),
                    name: "Departement of Motor Vehicles",
                },
                 coffee: {
                    img_url: require("../assets/images/blips/coffee.png"),
                    name: "Coffee Shop",
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
