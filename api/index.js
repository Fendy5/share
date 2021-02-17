import request from '~/utils/request'
import download from '~/utils/download-request'

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

export function downloadFile (params) {
  return download({
    url: 'api/v1/download-file',
    method: 'get',
    params
  })
}
