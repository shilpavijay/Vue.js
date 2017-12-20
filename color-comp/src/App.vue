<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selComp='appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selComp='appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selComp='appRed'">Load Red Template</button>
                <hr>
                
                <component :is="selComp">
                    <p>{{ compText }}</p>
                </component>   

                <!-- <app-blue><p>{{ compText }}</p></app-blue>
                <app-green>{{ compText }}</app-green>
                <app-red>{{ compText }}</app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                compText: "Welcome to Advanced Vue Components!",
                selComp: "appBlue" 
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
