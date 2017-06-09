//window.onload加载多个函数
function addLoadEvent(func) {
    var oldonload = window.onload;//得到上一个onload事件的函数
    if (typeof window.onload != 'function') {//判断类型是否为'function',注意typeof返回的是字符串
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();//调用之前覆盖的onload事件的函数---->由于我对js了解不多,这里我暂时理解为通过覆盖onload事件的函数来实现加载多个函数
            func();//调用当前事件函数
        }
    }
}