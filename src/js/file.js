export default {
  // 下载指定文件
  downloadFilesUrl(url) {
    let iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function() {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  }
}