require.config({
	// make components more sensible
	// expose jquery
	paths: {
		'components'      : '../components',

		'backbone'        : '../components/backbone/backbone',
		'jquery'          : '../components/jquery/dist/jquery',
		'jquery.bootstrap': '../components/bootstrap/dist/js/bootstrap',
		'underscore'      : '../components/underscore/underscore'
	},
	shim: {
		'jquery.bootstrap': {
			deps: ['jquery']
		},
		'underscore': {
            exports: '_'
        },
		'backbone': {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps: ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'Backbone'
		}
	}
});

if (!window.requireTestMode) {
	require(['main'], function() {});
}
