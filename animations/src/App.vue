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
                <br><br>
                <button class="btn btn-primary" @click="load = !load">Load/Remove</button> 
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    :css="false"
                    >
                    <div style="width: 300px; height: 100px; background-color: green;" v-if="load"></div>
                </transition> 
                
                    <button class="btn btn-primary"
                    @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert' ">Toggle Component</button>
                    <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedComponent"></component>
                </transition>
                <button class="btn btn-primary" @click = "addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                    <transition-group name="slide">
                    <li
                        class="list-group-item"
                        v-for="(number,index) in numbers"
                        @click = "removeItem(index)"
                        style="cursor: pointer"
                        :key="number">{{ number }}

                    </li>
                    </transition-group>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';
    export default {
        data() {
            return {
                show: false,
                load: false,
                selectAnimation: "fade",
                elementWidth: 100,
                selectedComponent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                console.log("beforeEnter")
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px'
            },
            enter(el,done) {
                console.log("enter");
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                },20);
            },
            afterEnter(el) {
                console.log("afterEnter")
            },
            enterCancelled(el) {
                console.log("enterCancelled")
            },
            beforeLeave(el) {
                console.log("beforeLeave");
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el,done) {
                console.log("leave")
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if(round > 20) {
                        clearInterval(interval);
                        done();
                    }
                },20);
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index,1);
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
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
        position: active;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(30px);
        }
        to {
            transform: translateY(0);
        }
    } 

    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(30px);
        }
    }
</style>