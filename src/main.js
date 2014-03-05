require.config({
    baseUrl: './',
    paths: {
        'jQuery': 'lib/jquery-2.1.0.min',
        'angular': 'lib/angular',
        'angularRoute': 'lib/angular-route.min'
    },
    shim: {
        jQuery: {
            exports: '$'
        },
        angular: {
            exports: 'angular'
        },
        angularRoute: {
            deps: ['angular']
        }
    }
});

require(['launcher', 'jQuery', 'angular', 'angularRoute'], function (launcher, $) {
    var app = launcher.Launcher();
});
//# sourceMappingURL=main.js.map
