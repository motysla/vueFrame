import axios from 'axios'

// axios 配置
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

function getUrl(url) {
  return '/your path' + url
}

// 后台接口
export function api_login(params) {
  return axios.post(getUrl("/api name"), params)
}
