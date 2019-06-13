module.exports = {
    exportPathMap: function() {
      return {
        '/': { page: '/' }
      }
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static'
    }
  }
  