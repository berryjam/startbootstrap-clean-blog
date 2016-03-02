/**
 * Created by berryjam on 16/2/17.
 */

//博客全局变量结构体
var blogVariable = {
    "start" : 0,    // 当前博文偏移值
    "size" : 3,      // 显示博文数量
    "incSize" : 3      // 增量博文数量
};

//博客内容展示处理函数
function blogDisplayRender(postbloglist) {
    var blogstr = '';
    for (var i = 0, bloglistlen = postbloglist.length; i < bloglistlen; i++) {
        var blog = postbloglist[i];
        blogstr += blogrender(blog);
    }
    //blogstr += '<div class="post-preview">' +
    //    '<a href="post.html">' +
    //    '<h2 class="post-title">' +
    //    'Man must explore, and this is exploration at its greatest' +
    //    '</h2>' +
    //    '<h3 class="post-subtitle">' +
    //    'Problems look mighty small from 150 miles up' +
    //    '</h3>' +
    //    '</a>' +
    //    '<p class="post-meta">' +
    //    'Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>' +
    //    '</div>' +
    //    '<hr>';
    //blogstr += '<div class="post-preview">' +
    //    '<a href="post.html">' +
    //    '<h2 class="post-title">' +
    //    'I believe every human has a finite number of heartbeats. I don\'t intend to waste any of mine.' +
    //    '</h2>' +
    //    '</a>' +
    //    '<p class="post-meta">' +
    //    'Posted by <a href="#">Start Bootstrap</a> on September 18, 2014</p>' +
    //    '</div>' +
    //    '<hr>';
    //blogstr += '<div class="post-preview">' +
    //    '<a href="post.html">' +
    //    '<h2 class="post-title">' +
    //    'Science has not yet mastered prophecy' +
    //    '</h2>' +
    //    '<h3 class="post-subtitle">' +
    //    'We predict too much for the next year and yet far too little for the next ten.' +
    //    '</h3>' +
    //    '</a>' +
    //    '<p class="post-meta">' +
    //    'Posted by <a href="#">Start Bootstrap</a> on August 24, 2014</p>' +
    //    '</div>' +
    //    '<hr>';
    //blogstr += '<div class="post-preview">' +
    //    '<a href="post.html">' +
    //    '<h2 class="post-title">' +
    //    'Failure is not an option' +
    //    '</h2>' +
    //    '<h3 class="post-subtitle">' +
    //    'Many say exploration is part of our destiny, but it’s actually our duty to future generations.' +
    //    '</h3>' +
    //    '</a>' +
    //    '<p class="post-meta">' +
    //    'Posted by <a href="#">Start Bootstrap</a> on July 8, 2014</p>' +
    //    '</div>' +
    //    '<hr>';
    document.getElementById("content").innerHTML = blogstr;
    //return blogstr;
}

//单条博客内容展示处理函数
function blogrender(blog) {
    var blogstr = '';
    blogstr += '<div class="post-preview">' +
        '<a href="post.html">' +
        '<h2 class="post-title">';
    blogstr += blog.blogtitle;
    blogstr += '</h2>';
    blogstr += '<h3 class="post-subtitle">';
    blogstr += blog.blogsubtitle;
    blogstr += '</h3>';
    blogstr += '</a>';
    blogstr += '<p class="post-meta">';
    blogstr += 'Posted by ' + '<a href="#">';
    blogstr += blog.author + '</a>';
    blogstr += ' ' + blog.createtime;
    blogstr += '</p>';
    blogstr += '</div>';
    blogstr += '<hr>';
    return blogstr;
}