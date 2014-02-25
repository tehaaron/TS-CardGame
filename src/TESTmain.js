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

require(['TESTGame', 'jQuery'], function (Game, $) {
    var game = new Game();
});
//# sourceMappingURL=TESTmain.js.map
