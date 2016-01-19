require.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app'
    },
    shim:{
        'framework7':{
            exports: 'Framework7'
        }
    }
});

require([
    'framework7',
    'app/preroute', 
    'app/preprocess',
    'app/appTemplate7'
    ], function (
        Framework7,
        preroute,
        preprocess,
        appT7
    ) {
        'use strict'
        
        huo.app = new Framework7({
            //init: false
            preroute: preroute,
            preprocess: preprocess
        });
        
        huo.t7 = Template7;
        huo.dom7 = Dom7;
        
        appT7.init();
        
        huo.mainView = huo.app.addView('.view-main', {
            dynamicNavbar: true
        });
});