import request from '~/utils/request'

export function getContents (params) {
  return request({
    url: '/api/v1/get-contents',
    method: 'get',
    params
  })
}

export function uploadText (data) {
  return request({
    url: '/api/v1/upload-text',
    method: 'post',
    data
  })
}

export function uploadFile (data) {
  return request({
    url: '/api/v1/upload-file',
    method: 'post',
    data
  })
}

export function uploadFileData (data) {
  return request({
    url: '/api/v1/upload-file',
    method: 'put',
    data
  })
}
