define([
	'marionette',
    'view/menu',
    'view/gallery'
	],function(Marionette,vMenu,Vgallery){


	var appRoute = {};

	appRoute.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "": "home"
        }
    });

    var routerHandler = {};

    routerHandler.start = function(){
        App.rMenu.show(new vMenu());
        // App.rfooter.show(new vFooter());
    },

    routerHandler.home = function(){
        require(['view/home'],function(Home){
            App.rContent.show(new Home());
            this.addLoader();
            // document.addEventListener('DOMContentLoaded', this.addLoader, false);
        });
    },

    addLoader = function(){
    	var galleryView = new Vgallery(); 
        var ovrl = document.getElementById("overlay"),
                prog = document.getElementById("progress"),
                stat = document.getElementById("progstat"),
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
                galleryView.bindClickonGalleryimg();
            }
            for (var i = 0; i < tot; i++) {
                var tImg = new Image();
                tImg.onload = imgLoaded;
                tImg.onerror = imgLoaded;
                tImg.src = img[i].src;
            }
    }

    return {
    	appRoute :appRoute,
    	routerHandler : routerHandler
    }

});