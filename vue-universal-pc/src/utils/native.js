// === WebViewJavascriptBridge ===

window.onerror = function(err) {
  //log ('window.onerror: ' + err)
  console.log('window.onerror: ' + err)
}

function connectWebViewJavascriptBridge(callback) {
  function isAndroid() {
    var u = navigator.userAgent
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
    return isAndroid
  }

  function ready() {
    console.log('微信打印', window.__wxjs_environment === 'miniprogram') // true
  }
  if (!window.WeixinJSBridge || !WeixinJSBridge.invoke) {
    document.addEventListener('WeixinJSBridgeReady', ready, false)
  } else {
    ready()
  }

  if (window.WebViewJavascriptBridge) {
    callback(WebViewJavascriptBridge, '建立桥连接1')
  }
  if (isAndroid()) {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function() {
        callback(WebViewJavascriptBridge, '建立桥连接2')
      },
      false
    )
  } else {
    if (window.__wxjs_environment === 'miniprogram') {
      return
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'https://__bridge_loaded__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function() {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  }
}
var XBK = {}
connectWebViewJavascriptBridge(function(bridge, qiao) {
  console.log('提供init方法', qiao)
  try {
    //此处try catch注意  android 有init初始化方法，必须调用 不调用后续注册的事件将无效 而IOS却没有init方法 调用会报错 所以得捕获异常
    bridge.init(function(message, responseCallback) {
      var data = {
        'Javascript Responds': '测试中文!'
      }
      responseCallback(data)
    })
  } catch (e) {
    console.log('error', e)
  }

  bridge.registerHandler('XueBankWebViewNativeBridge', function(
    message,
    responseCallback
  ) {
    let messageData = JSON.parse(message)
    console.log('native主动调用js', messageData)
    if (messageData.action == 'StartRefresh') {
      window.that.StartRefresh()
    }
    var data = { state: 'OK！', code: 0 }
    responseCallback(data)
  })
})

//获取手机UUID（唯一性Id）
XBK.UUID = function(color) {
  var data = { data: {}, action: 'UUID' }
  //console.log ('js 发送的数据' , data)
  console.log('获取UUID')
  connectWebViewJavascriptBridge(function(bridge) {
    bridge.callHandler('your bridge name', data, function(responseData) {
      console.log('接收到的UUID', JSON.parse(responseData))
    })
  })
}

// ....

export default XBK
