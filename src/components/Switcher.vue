<template>
  <div v-on:click="next">
    <h1>{{ msg }}</h1>
    <button v-on:click="viewEnglish">보기</button>
  </div>
</template>

<script>
  import profile from '../js/profile'
  import Vue from 'vue'
  import VuePapaParse from 'vue-papa-parse'

  Vue.use(VuePapaParse)

  export default {
    name: 'Switcher',
    data () {
      return {
        msg: 'Welcome to Hell',
        data: [],
        eng: ''
      }
    },
    created () {
      const that = this
      this.readTextFile(profile.staticPath() + '/data/source-01.csv',
        (text) => {
          const json = that.$papa.parse(text, {
            delimiter: '|',
            skipEmptyLines: true
          })

          if (json) {
            that.data = json.data
            that.shuffle(that.data)
            console.log(that.data)
          }
        })
    },
    methods: {
      readTextFile: function (filePath, callback) {
        const request = new XMLHttpRequest()
        request.open('GET', filePath, false)

        request.onload = function (e) {
          callback(e.target.response)
        }

        request.send()
      },

      shuffle: function (array) {
        array.sort(() => Math.random() - 0.5)
      },

      next: function () {
        if (this.data.length > 0) {
          const sentences = this.data.shift()
          this.eng = sentences[0]
          this.msg = sentences[1]
        } else {
          alert('재 시작')
        }
      },

      viewEnglish: function () {
        alert(this.eng)
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
