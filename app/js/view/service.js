define([
	'marionette',
	'handlebars',
	'text!templates/service.html'
	],function(Marionette,HandleBars, tmp){
	'use strict';

	return Marionette.LayoutView.extend({

		initialize : function(){
			this.serviceData = {
				electrical : {name:'Electrical',info : "Masters of their trade their years of experience in a wide variety of electrical devices and of all major brands they can handle your any type of complaint. Think of any household/office electrical equipment ranging from air-conditioners, fans, wiring to fixing up of tube lights etc. they will repair everything.",image:"Electrical"},
				homedecorarion : {name:'Home Decoration',info : "Feel like adding a new colour to your home! Feel like changing the entire décor! Or is it that you want something as simple as getting some new furnishings tailored! That’s what we seek to do for you while helping your world become more convenient. At home or office our empanelled experts will take care of your every demand and can even do the entire range of upholstery for you. The understand the current trends, know the nitty gritties of what’s in fashion and what is not, possess an eye for colour combinations, and most of all are masters of their trade.",image :"HomeFurnishing"},
				carpentry : {name:'Carpentry',info : "Want a new look for your home/office? Or want to get your entire woodwork done? Or it could even be some minor fixing that you are looking for! The carpenters with us can help you in any type of work including the ones that involves branded/imported furniture. So right from dismantling to making way for totally a new look they carry with them long years of experience in the trade and can give you any look you want or for that matter your designer suggests. Most of all they are from your locality and you can get in touch with them whenever you want.",image :"Carpenter"},
				interiordecoration : {name:'Interior Decoration',info : "Interior designing is one of the most important things that will make your home come alive. From one-BHK homes to villas to shops and business centres we have on our panel expert team of designers who are willing to fulfill your each and every requirement. Having wide ranging experience and fully trained these professionals are well versed in latest international trends. From traditional to ethnic and modern as well as contemporary they are fully capable of giving your home/offic.",image :"InteriorDecorator"},
				painting : {name : "Painting",info:"Get your home/office look new. Give it a refreshing aura. Turn it into an abode you love. Get it painted. Or for that matter, if you want, get its colour fixed. Our expert hands will guide you into the selection of appropriate brand and will do it for you at the most competitive rates. During festivals such as Deepawali or before house warming parties or when shifting to a new place it is imperative to add a new coat of colour to begin a new life. The experts empanelled with us carry with them a deep knowledge of colour combinations and even suggest you a theme according to your personal preferences.",image:"Painting"},
				itsolution : {name : "IT Solutions",info:"Often when something goes wrong with our computer/laptop, be it hardware/hardware software failure it seems as if our life has stopped. A timely help under such times of distress is all that we need… and this is where Help Guru will be glad to help you. Our panel of qualified engineers is always eager to help you out irrespective of the brand your computer/laptop. When it comes to softwares it is only the best advice that you will get from our professionals. They are fully geared to take care of any exigency and will ensure total peace of mind. After all at Help Guru your satisfaction is our No. 1 priority.",image:"itsolution"},
				bungalow : {name : "Bungalows",info:"Leaky faucets, jammed water lines or broken plumbing don’t just reflect badly on your personality but also deprive the nation of this precious resource. Get them fixed at the earliest. Fill up the form below and Help Guru will help you fix the problem. The plumbers on our panel are a trained lot and aided by years of experience they can reach the crux of the problem quickly and give you a solution that really works. What’s more, since they are from your neighbourhood only they also possess the knowledge of the common issues of the area including the pipeline architecture, which helps them help you.",image:"img7"},
				multiplex : {name : "Multiplex",info:"We deliver intelligent solutions with commitment, fairness and honesty in partnership with our customers, suppliers and people. Our people have the experience and drive to implement personalised solutions which help our clients meet their business objectives.",image:"img8"}

			}
		},

		events : {
			'click .serviceread' : "showInfo",
			'click .infoclose' : "hideinfo",
			'click .serviceread2' : "showblock",
			'click .infoclose2' : "hideblock"
		},

		template : HandleBars.compile(tmp),

		regions : {
		
		},

		onRender : function(){
		
		},

		showInfo : function(e){
			var self = this;
			var a = $(e.currentTarget);
			var data = self.serviceData[a.attr('data-heading')];
			this.$el.find('.serviceheading').text(data.name);
			this.$el.find('.serviceheading').append($('<a class="btn pull-right text-success infoclose"><i class="fa fa-times"></i></a>'));
			this.$el.find('.serviceimage').attr('src','app/images/'+data.image+'.jpg');
			this.$el.find('.serviceinfo').text(data.info);
			this.$el.find('.showonclickinfo1').css('display','block');
			this.$el.find('.showonclickinfo1').removeClass('fadeOut');
			this.$el.find('.showonclickinfo1').addClass('fadeIn');
		},

		hideinfo : function(){
			var self = this;
			this.$el.find('.showonclickinfo1').removeClass('fadeIn');
			this.$el.find('.showonclickinfo1').addClass('fadeOut');
			setTimeout(function(){
				self.$el.find('.showonclickinfo1').css('display','none');
			},500)
		},
		showblock : function(e){
			var self = this;
			var a = $(e.currentTarget);
			var data = self.serviceData[a.attr('data-heading')];
			this.$el.find('.serviceheading2').text(data.name);
			this.$el.find('.serviceheading2').append($('<a class="btn pull-right text-success infoclose2"><i class="fa fa-times"></i></a>'));
			this.$el.find('.serviceimage2').attr('src','app/images/'+data.image+'.jpg');
			this.$el.find('.serviceinfo2').text(data.info);
			this.$el.find('.showonclickinfo2').css('display','block');
			this.$el.find('.showonclickinfo2').removeClass('fadeOut');
			this.$el.find('.showonclickinfo2').addClass('fadeIn');
		},
		hideblock : function(){
			var self = this; 
			this.$el.find('.showonclickinfo2').removeClass('fadeIn');
			this.$el.find('.showonclickinfo2').addClass('fadeOut');
			setTimeout(function(){
				self.$el.find('.showonclickinfo2').css('display','none');
			},500)
		}
	});

});