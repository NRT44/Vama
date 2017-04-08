define([
	'marionette',
	'handlebars',
	'text!templates/gallery.html'
	],function(Marionette,HandleBars, tmp){
	'use strict';

	return Marionette.LayoutView.extend({

		initialize : function(){
		},

		template : HandleBars.compile(tmp),

		regions : {
		},

		onRender : function(){
	
		}
	});

});