<template>
<div class="flex">
    <leftMenu name="Jobs">
    </leftMenu>
    <div class="mx-auto w-9/12 flex-wrap justify-around">
        <h1 class="text-4xl font-bold text-center my-5">
            Jobs
        </h1>
        <p class="m-4">There are several jobs that you can currently have in Mafia City RP:
            Garbage truck driver - Drive around the City and collect rubbish before returning back to the depot, you will require a truck license for this job.
        </p>
        <div>
            <div class="flex flex-wrap">
                <button  :class="{active: truckButton}" class="btnJob" @click=" truckButton = !truckButton">Truck Driver</button>
                <button :class="{active: lumberJackButton}" class="btnJob" @click=" lumberJackButton = !lumberJackButton">Lumberjack</button>
                <button class="btnJob">Fishing</button>
                <button class="btnJob">Garbage Truck</button>
                <button class="btnJob">Minerals</button>
            </div>
            <div class=" bg-gray-100 flex flex-wrap justify-center mx-5 border-pink-600 border-b-4 mb-5" v-if="truckButton">
                <h2 class=" text-center w-full text-2xl font-bold my-4">Truck Driver</h2>
                <p class=" text-center w-full my-2">
                    To start the job you will have to visit this location on the map and sign up
                </p>
                <img src="../assets/images/jobs/truckLocation.png" alt="">
                <p class=" text-center w-full my-2">
                    Once you sign up for the job, press Y on the circle and choose your vehicle.
                </p>
                <img src="../assets/images/jobs/truckInfo.png" alt="">
                <p class=" text-center w-full my-2"><span class="font-bold">Note: Each cargo will make you go to a different location</span></p>
                <p class=" text-center w-full my-2">Get in the truck (Press K to unlock it and Y to start the engine)
                    From here on you will have to follow the red markers on your gps and press Y when the text tells you to.<span class="font-bold"> Example:</span>
                </p>
                <img src="../assets/images/jobs/truckEnd.png" alt="">
                <p class=" mb-7 w-full text-center font-bold my-2">
                    To End the job, return the truck to the same location you picked it up from, failing to do so will cost you money to get it towed back!
                </p>
            </div>

            
          <div class=" bg-gray-100 flex flex-wrap justify-center mx-5 border-pink-600 border-b-4 mb-5"  v-if="lumberJackButton">
                <h2 class=" text-center w-full text-2xl font-bold my-4">Lumberjack</h2>
                <p class=" text-center w-full my-2">
                    You will have to come to this location and the map with a hatchet (you can buy one from gun stores)
                </p>
                <img src="../assets/images/jobs/lumberLocation.png" alt="">
                <p class=" text-center w-full my-2">After that approach a tree and press Y. This timer should appear.</p>
                <img src="../assets/images/jobs/lumberInfo.png" alt="">
                <p class=" text-center w-full my-2"><span>Once the timer ends you should be able to see this</span></p>
                <img src="../assets/images/jobs/lumberEnd.png" alt="">
                <p class=" text-center font-bold w-full my-2 mb-7">Once your inventory is full go ahead and visit the dropoint. You will sell your logs there.</p>
            </div>
            <div v-if="fishingButton">
                <h2>Truck Driver</h2>
                <p >

                </p>
                <img src="" alt="">
                <p></p>
                <img src="" alt="">
                <p><span></span></p>
                <p></p>
                <img src="" alt="">
                <p><span></span></p>
            </div>
            <div v-if="mineralsButton">
                <h2>Truck Driver</h2>
                <p>

                </p>
                <img src="" alt="">
                <p></p>
                <img src="" alt="">
                <p><span></span></p>
                <p></p>
                <img src="" alt="">
                <p><span></span></p>
            </div>
            <div v-if="garbageButton">
                <h2>Truck Driver</h2>
                <p>

                </p>
                <img src="" alt="">
                <p></p>
                <img src="" alt="">
                <p><span></span></p>
                <p></p>
                <img src="" alt="">
                <p><span></span></p>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import leftMenu from './LeftMenu'

export default {
    name: 'Jobs',
    data() {
        return {
            garbageButton: false,
            truckButton: true,
            fishingButton: false,
            lumberJackButton: false,
            mineralsButton: false,

        }
    },
    components: {
        leftMenu,
    },
    methods: {}

}
</script>

<style>

</style>
