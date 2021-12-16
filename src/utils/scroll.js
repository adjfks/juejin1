// 获取页面顶部被卷起来的高度
function scrollTop () {
  return Math.max(
    // chrome
    document.body.scrollTop,
    // firefox,IE
    document.documentElement.scrollTop)
}

// 获取页面文档的总高度
function documentHeight () {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
}

// 获取页面浏览器视口高度
function windowHeight () {
  return (document.compatMode === 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight
}

export {
  scrollTop, documentHeight, windowHeight
}
