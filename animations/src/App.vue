<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <br/><br/>
                <button class="btn btn-primary" @click="show=!show">Show Alert</button>
                <br/><br/>

                <select class="form-control" v-model="selectAnimation">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>

                <transition :name="selectAnimation">
                    <div class="alert alert-info" v-if="show">Some info goes here</div>
                </transition>
                <transition                 
                    enter-active-class="animated bounce"
                    leave-active-class="animated wobble"
                    >
                    <div class="alert alert-info" v-if="show">Some info goes here</div>
                </transition>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                selectAnimation: "fade"
            }
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
    }

    .fade-leave {
        /*opacity: 1;*/
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }

    .slide-enter {
        /*transform: translateX(-30px);*/
    }

    .slice-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }

    @keyframes slide-in {
        from {
            transform: translateX(30px);
        }
        to {
            transform: translateX(0);
        }
    } 

    @keyframes slide-out {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(30px);
        }
    }

</style>