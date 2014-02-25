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

require(['Game', 'jQuery'],
	(Game?, $?) => {
		var game = new Game();
});

