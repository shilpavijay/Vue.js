<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <h1 class="text-center">The Super Quiz</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
              <component :is="mode" @answered="answered($event)" @confirmed="mode='app-question'"> </component>
            </div>
        </div>
    </div>
</template>

<script>
import Answer from './components/Answer.vue'
import Question from './components/Question.vue'

export default {
  data () {
    return {
        mode: 'app-question'
    }
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = 'app-answer';
      }
      else {
        this.mode = 'app-question';
        alert("Wrong! Try Again")
      }
    }
  },
  components: {
    appQuestion: Question,
    appAnswer: Answer
  }
}
</script>

<style lang="scss">
</style>