<template>
  <div>
    <div v-on:click="next">
      <h1>{{ msg }}</h1>
    </div>

    <button v-on:click="viewEnglish" class="btn btn-dark">보기</button>
  </div>
</template>

<script>
  import SentenceParser from '../js/SentenceParser'

  export default {
    name: 'Switcher',
    data () {
      return {
        msg: 'Welcome to Hell',
        data: [],
        filePaths: [
          '/data/source-01.csv'
        ],
        sentences: [],
        selectedSentence: {}
      }
    },
    created () {
      this.fetch()
    },
    methods: {
      fetch: function () {
        const sentences = new SentenceParser().parse(this.filePaths)
        this.shuffle(sentences)
        this.sentences = sentences
      },

      shuffle: function (array) {
        array.sort(() => Math.random() - 0.5)
      },

      next: function () {
        if (this.sentences.length > 0) {
          this.selectedSentence = this.sentences.shift()
          this.msg = this.selectedSentence.kor
        } else {
          this.fetch()
        }
      },

      viewEnglish: function () {
        alert(this.selectedSentence.eng)
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
