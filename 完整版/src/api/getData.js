import axios from 'axios'

const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
let $http = axios.create({
  baseURL: API_PROXY + 'https://way.jd.com/jisuapi/get'
})
// 请求列表
export function getTopic (params) {
  let paramsData = Object.assign({}, {
    channel: '头条',
    num: '30',
    start: '0',
    appkey: '977d4ed29a37a6bebb2e95085a196ba9'
  }, params)
  return $http.get('/', {
    params: paramsData
  })
}
// 请求详情
export function getDetail (params) {
  let paramsData = Object.assign({}, {
    channel: '头条',
    num: '1',
    start: '0',
    appkey: '977d4ed29a37a6bebb2e95085a196ba9'
  }, params)
  return $http.get('/', {
    params: paramsData
  })
}
