({
    appDir: '../app',
    optimizeCss: "standard",
    mainConfigFile: '../app/js/config.js',
    dir: '../deploy',
    removeCombined: true,
    modules: [
        //First set up the common build layer.
        {
            //module names are relative to baseUrl
            name: '../config',
            //List common dependencies here. Only need to list
            //top level dependencies, "include" will find
            //nested dependencies.
            include: [
                      'framework7',
                      'app/preroute',
                      'app/preprocess'
            ]
        }

    ]
})
