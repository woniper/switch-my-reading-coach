<template>
  <div>
    <div v-on:click="next">
      <h1>{{ msg }}</h1>
    </div>

    <b-button variant="danger" v-on:click="viewEnglish">영문장 보기</b-button>
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
          '/data/A01-01.csv',
          '/data/A02-03.csv',
          '/data/A03-05.csv',
          '/data/A04-07.csv',
          '/data/B01-02.csv',
          '/data/B02-04.csv',
          '/data/B05-10.csv',
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
        } else {
          alert('모든 문장이 끝났습니다. 다시 시작합니다.')
          this.fetch()
        }
      },

      viewEnglish: function () {
        if (this.selectedSentence.eng) {
          alert(this.selectedSentence.eng)
        }
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
