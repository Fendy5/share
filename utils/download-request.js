import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: process.env.baseUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000, // request timeout
  responseType: 'arraybuffer'
})

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (!Object.prototype.hasOwnProperty.call(response.headers, 'content-disposition')) {
      const enc = new TextDecoder('utf-8')
      const res = JSON.parse(enc.decode(new Uint8Array(response.data)))
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      const blob = new Blob([response.data], { type: '' })
      const href = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.style.display = 'none'
      link.href = href
      let fileName = 'download'
      try {
        fileName = window.decodeURI(response.headers['content-disposition'].split('=')[1].replace(new RegExp('"', 'g'), ''))
      } catch (e) {
        fileName = 'download'
      }
      link.setAttribute('download', fileName)

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return response
    }
  }
)
export default service
