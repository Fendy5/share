import request from '~/utils/request'

export function getContents (data) {
  return request({
    url: '/abc/fendy/1',
    method: 'post',
    data
  })
}
