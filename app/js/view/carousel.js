define([
	'marionette',
	'handlebars',
	'text!templates/carousel.html'
	],function(Marionette,HandleBars, tmp){
	'use strict';

	return Marionette.LayoutView.extend({

		initialize : function(){
		},

		template : HandleBars.compile(tmp),

		regions : {
			
		},

		onRender : function(){
			this.$el.find('.carousel').carousel({
				interval: 3000
			})
		}
	});

});