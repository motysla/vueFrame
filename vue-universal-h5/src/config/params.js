const $env = 1

const api_pro = 'https://xxx.xxxx.com'
const api_test = 'http://192.148.1.x'

function getHost() {
  return $env ? api_pro : api_test
}

module.exports = {
  getHost
}
