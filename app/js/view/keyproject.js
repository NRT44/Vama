define([
	'marionette',
	'handlebars',
	'text!templates/keyproject.html'
	],function(Marionette,HandleBars, tmp){
	'use strict';

	return Marionette.LayoutView.extend({

		initialize : function(){
			this.projectInfo = [{
					company: 'Idea',
					location: 'Teen hath naka, Thane',
					period: '30 days'
				},{
					company: 'Airtel',
					location: 'Ashok chawk, Nagpur',
					period: '20 days'
				},{
					company: 'Airtel',
					location: 'Phuti kuti, Indore',
					period: '25 days'
				},{
					company: 'Airtel',
					location: 'Shahi bagh, Ahmedabad',
					period: '25 days'
				},{
					company: 'Airtel',
					location: 'Bibwewadi, pune',
					period: '25 days'
				},{
					company: 'Airtel',
					location: 'Kharadi, Pune (Airtel head office renovation)',
					period: '75 days'
				}, {
					company: 'Airtel',
					location: 'Vileparla, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Bhavarkuva, Indor',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Shapnasangeeta, Indor ',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Geetabhavan Indor',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Nashik',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Bhopal',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Aurangabad',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Vanwadi, Pune',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Baner, Pune',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Pimpli Shodagar, Pune, ',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'J M road, Pune',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Dekan, Pune',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Karway Road, Pune',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Mahavir Nagar, Kandivali, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Char Bangla, Andheri, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Bandra, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Gaiwadi, Charniroad, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Marwadi Vidhyalai, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Mumbai Central,Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Vashai, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Nalasopara, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Miraroad, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Ulashnagar, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Chakala, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Powai, Mumbai',
					period: '20 days'
				}, {
					company: 'Airtel',
					location: 'Sion, Mumbai',
					period: '20 days'
				}
			]
		},

		template : HandleBars.compile(tmp),

		templateHelpers: function() {
			return this;
		},

		regions : {
		},

		onRender : function(){
		}
	});

});