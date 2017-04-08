define([
	'marionette',
	'handlebars',
	'text!templates/home.html',
	'view/carousel',
	'view/service',
	'view/team',
	'view/contact',
	'view/client',
	'view/keyproject',
	'view/gallery'
	],function(Marionette,HandleBars, tmp, carouselView, Vservices, Vteam, Vcontact, Vclient, Vkeyproject, Vgallery){
	'use strict';

	return Marionette.LayoutView.extend({

		initialize : function(){
		},

		template : HandleBars.compile(tmp),

		regions : {
			rCarousel : '#carousel',
			rServices : '#services',
			rTeam : '#team',
			rContact : '#contact',
			rClient : '#client',
			rKeyProject : '#keyproject',
			rPhotoGallery: '#photogallery'
		},

		onRender : function(){
			this.rCarousel.show(new carouselView());
			this.rServices.show(new Vservices());
			this.rTeam.show(new Vteam());
			this.rContact.show(new Vcontact());
			this.rClient.show(new Vclient());
			this.rPhotoGallery.show(new Vgallery);
			this.rKeyProject.show(new Vkeyproject());
		}
		/*addLoader : function(){
			var ovrl = this.$el.find("#overlay"),
				prog = this.$el.find("#progress"),
				stat = this.$el.find("#progstat"),
				img = document.images,
				c = 0,
			tot = img.length;
			function imgLoaded(){
				c += 1;
				var perc = ((100 / tot * c) << 0) + "%";
				prog.style.width = perc;
				stat.innerHTML = "Loading " + perc;
				if (c === tot) return doneLoading();
			}

			function doneLoading() {
				ovrl.style.opacity = 0;
				setTimeout(function() {
					ovrl.style.display = "none";
				}, 1200);
			}
			for (var i = 0; i < tot; i++) {
				var tImg = new Image();
				tImg.onload = imgLoaded;
				tImg.onerror = imgLoaded;
				tImg.src = img[i].src;
			}
		}*/
	});

});