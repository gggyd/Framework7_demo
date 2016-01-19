define(function() {
    'use strict';
    
    var init = function() {
        huo.t7.registerHelper('getTitle', function(first, second) {
            return first + ' ' + second;
        });
    }
    return {
        init: init
    }
});