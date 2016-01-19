define([
    'app/process/about',
    'app/process/home'
], function(about, home) {
    'use strict';
    
    var 
        preprocess
        ;
    
    preprocess = function(content, url, next) {
        // console.log(url);
        var prefix = 'tpl/';
        url = url.replace(new RegExp(prefix),'');
        
        home(content, url, next);
        about(content, url, next);
        
        // if (url === 'about.html') {
        //     return about(content, url, next);
        // } else if (url === 'home.html') {
        //     return home(content, url, next);
        // }
    };
    
    return preprocess;
});