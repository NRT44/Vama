define([
	'marionette',
    'backbone',
	'routing/route'
],function(Marionette,Backbone,Routing){

	var app = new Marionette.Application();

	app.addRegions({
        rMenu : '#menu',
        rContent : '#content'
    });

    app.addInitializer(function(options) {
        app.router = new options.router.Router({
            controller: options.controller,
        });
        options.controller.start();
        Backbone.history.start();
    });

    var menuTab  = Backbone.Model.extend({
        defualt : {
            currentTab : ''
        }
    });

    app.menuTab = new menuTab();

    // app.on("initializer:after", function() {
    //     console.log("called");
    //     Backbone.history.start();
    // });

    var options = {
        controller: Routing.routerHandler,
        router: Routing.appRoute
    };

    window.App = app;
    app.start(options);
	return app;
});