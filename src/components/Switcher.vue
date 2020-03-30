<template>
  <div>
    <div v-on:click="next">
      <b-alert show variant="success">
        <h4 class="alert-heading"> {{ msg }} </h4>
        <hr v-show="dismissEnglish">
        <p class="mb-0" v-show="dismissEnglish">
          {{ selectedSentence.eng }}
        </p>
      </b-alert>
    </div>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>CountDown : {{ dismissCountDown }} seconds...</p>

      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button variant="danger" v-on:click="showEnglish">Show English</b-button>
  </div>
</template>

<script>
  import SentenceParser from '../js/SentenceParser'

  export default {
    name: 'Switcher',
    data () {
      return {
        msg: 'Welcome to Hell',
        dismissEnglish: false,
        filePaths: [
          '/data/A01-01.csv',
          '/data/A02-03.csv',
          '/data/A03-05.csv',
          '/data/A04-07.csv',
          '/data/B01-02.csv',
          '/data/B02-04.csv',
          '/data/B03-06.csv',
          '/data/B04-08.csv',
          '/data/B05-10.csv',
        ],
        sentences: [],
        selectedSentence: {},
        dismissSecs: 5,
        dismissCountDown: 0
      }
    },
    created () {
      this.fetch()
    },
    methods: {
      fetch: function () {
        const sentences = new SentenceParser().parse(this.filePaths)
        this.sentences = this.shuffle(sentences)
        console.info(sentences)
      },

      shuffle: function (array) {
        array.sort(() => Math.random() - 0.5)
        return array
      },

      next: function () {
        if (this.sentences.length > 0) {
          this.selectedSentence = this.sentences.shift()
          this.msg = this.selectedSentence.kor
          this.showAlert()
          this.dismissEnglish = false
        } else {
          alert('모든 문장이 끝났습니다. 다시 시작합니다.')
          this.fetch()
        }
      },

      showEnglish: function () {
        if (this.selectedSentence.eng) {
          this.dismissEnglish = !this.dismissEnglish
        }
      },

      countDownChanged (dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },

      showAlert () {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
