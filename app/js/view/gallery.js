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
		
		events : {
		
		},

		regions : {
		},
		
		bindClickonGalleryimg : function(e){
			var self = this;
			
			/*document.getElementById('parent-div').addEventListener("click", function(e) {
				var elem = this; // to refer to the clicked object
				var index = $(this).index();
			}, true);*/
			/*$('#parent-div').on("click", function (e) {
				e.preventDefault();
				var elem = this; // to refer to the clicked object
				var index = $(this).index();
				var target = event.target;
				//var anchor = $(e.currentTarget);
				//anchor.detach().insertAfter('.imgcontainer');
			});*/
			// $.find('.hello');
			$('#dreamgallery').dreamSlider({
	                    thumbsPerLine:6,
	                   	easeEffect: 'bounce'
	                });
		},

		onRender : function(){
			
			var dreamslider;
			// console.log(dreamSlider)
		},
		onShow : function(){
			
		}
	});

});