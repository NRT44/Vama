define([
	'marionette',
	'handlebars',
	'text!templates/client.html'
	],function(Marionette,HandleBars, tmp){
	'use strict';

	return Marionette.LayoutView.extend({

		initialize : function(){
		},

		template : HandleBars.compile(tmp),

		regions : {
		},

		onRender : function(){
			// var self = this;
			// this.$el.find('.client').hover(function(e) {
			// 	var $client = $(e.currentTarget);
			// 	$client.find('.placeholder').toggleClass('animated swing');
			// });
		}
	});

});