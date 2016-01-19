define(function() {
    return function(content, url, next) {
        
        if (url === 'home.html') {
            var template = huo.t7.compile(content);
            var resultContent = template({title: 'Home'});
            next(resultContent);
        }
        
    }
})