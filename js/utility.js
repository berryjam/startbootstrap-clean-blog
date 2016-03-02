/**
 * Created by berryjam on 16/2/18.
 */

// 将字符串转换成json对象
function strToObj(json) {
    return eval("(" + json + ")");
}

//加载博客内容
function blogLoad(){
    $.post("/portal/GetBlog", {
        "start" : blogVariable.start,
        "size" : blogVariable.size
    }, function(msg) {
        blogDisplayRender(msg);
    });
}

//加载更早的博客内容
function earlierBlogsLoad(){
    blogVariable.size += blogVariable.incSize;
    blogLoad();
}