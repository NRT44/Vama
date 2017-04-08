define([
	'marionette',
	'handlebars',
	'text!templates/contact.html'
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