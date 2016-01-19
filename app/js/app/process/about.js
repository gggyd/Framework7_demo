define(function() {
    return function(content, url, next) {
        
        if (url === 'about.html') {
            var template = huo.t7.compile(content);
            var resultContent = template({title: 'About Me'});
            next(resultContent);
        }
        
    }
    
})