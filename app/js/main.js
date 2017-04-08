require.config({

    urlArgs: '',
    deps: ['jquery'],
    waitSeconds: 30,

    paths: {
        jquery: '../libs/jquery/jquery-3.1.0',
        underscore: '../libs/underscore/underscore',
        backbone: '../libs/backbone/backbone',
        marionette: '../libs/marionette/backbone.marionette',
        handlebars: '../libs/hbs/Handlebars',
        bootstrap: '../libs/bootstrap/bootstrap.min',
        text: '../libs/text/text-master/text'
    },


    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }

});

require([
    'backbone',
    'application',
    'marionette',
    'bootstrap'
], function(Backbone, App, Marionette) {
    'use strict';
});