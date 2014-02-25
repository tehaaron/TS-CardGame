require.config({
    baseUrl: './',
    paths: {
        jQuery: 'lib/jquery-2.1.0.min'
    },
    shim: {
        jQuery: {
            exports: '$'
        }
    }
});

require(['Game', 'jQuery'], function (Game, $) {
    var game = new Game();
});
//# sourceMappingURL=main.js.map
