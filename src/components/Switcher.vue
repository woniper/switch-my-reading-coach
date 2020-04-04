<template>
  <div>
    <div>
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

    <b-button variant="info" v-on:click="previous">Previous</b-button>
    <b-button variant="danger" v-on:click="showEnglish">Show English</b-button>
    <b-button variant="info" v-on:click="next">Next</b-button>
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
        selectedSentenceIndex: 0,
        sentencesSize: 0,
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
        this.sentencesSize = sentences.length
        this.selectedSentenceIndex = 0
        this.dismissEnglish = false
        this.sentences = this.shuffle(sentences)
        console.info(sentences)
      },

      shuffle: function (array) {
        array.sort(() => Math.random() - 0.5)
        return array
      },

      next: function () {
        if (this.isLastSentence()) {
          alert('모든 문장이 끝났습니다. 다시 시작합니다.')
          this.fetch()
        }

        this.selectedSentence = this.nextSentence()
        this.msg = this.selectedSentence.kor
        this.showAlert()
      },

      nextSentence: function () {
        const selectedSentence = this.sentences[this.selectedSentenceIndex++]
        this.selectedSentence = selectedSentence
        return selectedSentence
      },

      isLastSentence: function () {
        return this.selectedSentenceIndex === this.sentences.length
      },

      previous: function () {
        if (this.isFirstSentence()) {
          alert('현재 문장이 첫 문장입니다.')
          return
        }

        this.selectedSentence = this.previousSentence()
        this.msg = this.selectedSentence.kor
        this.showAlert()
      },

      previousSentence: function () {
        const selectedSentence = this.sentences[this.selectedSentenceIndex--]
        this.selectedSentence = selectedSentence
        return selectedSentence
      },

      isFirstSentence: function () {
        return 0 === this.selectedSentenceIndex
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
        this.dismissEnglish = false
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
