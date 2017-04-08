define([
	'marionette',
	'handlebars',
	'text!templates/menu.html'
	],function(Marionette,HandleBars, tmp){
	'use strict';

	return Marionette.LayoutView.extend({

		initialize : function(){
		},

		template : HandleBars.compile(tmp),

		events : {
			'click #myNavbar a' : 'preventUrl'
		},

		regions : {
			
		},

		onRender : function(){
			var self = this;
			this.didScroll;
			this.lastScrollTop = 0;
			this.delta = 5;
			this.navbarHeight = this.$el.find('header').outerHeight();

			$(window).scroll(function(event) {
				self.didScroll = true;
			});

			setInterval(function() {
				if (self.didScroll) {
					self.hasScrolled();
					self.didScroll = false;
				}
			}, 250);
		},

		hasScrolled : function(){
			var st = $(window).scrollTop();

			// Make sure they scroll more than delta
			if (Math.abs(this.lastScrollTop - st) <= this.delta)
			return;

			// If they scrolled down and are past the navbar, add class .nav-up.
			// This is necessary so you never see what is "behind" the navbar.
			if (st > this.lastScrollTop && st > this.navbarHeight) {
			// Scroll Down
			this.$el.find('header').removeClass('nav-down').addClass('nav-up');
			this.$el.find('.nav-main').removeClass('nav-main-down').addClass('nav-main-up');
			this.$el.find('main').removeClass('main-nomargin').addClass('main-addmargin');




			} else {
			// Scroll Up
				if (st + $(window).height() < $(document).height()) {
					this.$el.find('header').removeClass('nav-up').addClass('nav-down');
					this.$el.find('.nav-main').removeClass('nav-main-up').addClass('nav-main-down');
					this.$el.find('main').removeClass('main-addmargin').addClass('main-nomargin');
				}
			}

			this.lastScrollTop = st;
		},

		preventUrl : function(e){
			e.preventDefault();
			var a = $(e.currentTarget);
			var href = a.attr('href');
			a.closest('li').siblings().removeClass('activeMenu');
			a.closest('li').addClass('activeMenu');
			$('html, body').animate({
				scrollTop: $(href).offset().top - 95
			}, 800)
		}
	});

});