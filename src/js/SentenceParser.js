import profile from '../js/profile'
import Sentence from './Sentence'
import papa from 'papaparse'

export default class SentenceParser {

  parse(filePaths) {
    const that = this
    const sentences = []
    filePaths.map(x => that.readText(profile.staticPath() + x, (text) => {
      const json = that.parseJson(text)
      json.data.forEach(x => sentences.push(new Sentence(x[0], x[1])))
    }))

    return sentences
  }

  readText(filePath, callback) {
    const request = new XMLHttpRequest()
    request.open('GET', filePath, false)

    request.onload = function (e) {
      callback(e.target.response)
    }

    request.send()
  }

  parseJson(text) {
    return papa.parse(text, {
      delimiter: '|',
      skipEmptyLines: true
    })
  }
}
