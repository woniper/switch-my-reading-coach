'use strict'

export default {
  staticPath: function () {
    if (process.env.NODE_ENV === 'development') {
      return '/static'
    } else {
      return '/switch-my-reading-coach/static'
    }
  }
}
