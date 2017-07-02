System.register(['angular2/core', './config.service', './video', './playlist.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, config_service_1, video_1, playlist_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (config_service_1_1) {
                config_service_1 = config_service_1_1;
            },
            function (video_1_1) {
                video_1 = video_1_1;
            },
            function (playlist_component_1_1) {
                playlist_component_1 = playlist_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.mainHeading = config_service_1.Config.MAIN_HEADING;
                    this.videos = [
                        new video_1.Video(1, "Black Panther ", "dxWvtMOGAhw", "Black Panther is an upcoming American superhero film based on the Marvel Comics character of the same name."),
                        new video_1.Video(2, "Marvel's Inhumans", "1sYF1SXcWqQ", "Marvel's Inhumans, or simply Inhumans, is an upcoming American television series developed for ABC, based on the Marvel Comics race of the same name."),
                        new video_1.Video(3, "VIP 2", "qecBCwtjBwE", "Velaiilla Pattadhari 2, popularly referred to as VIP 2, is an upcoming Tamil action-comedy-drama film directed by Soundarya Rajnikanth."),
                        new video_1.Video(4, "Jumanji 2", "87VjWSar6jE", "Four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it.")
                    ];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/ts/app.component.html',
                        directives: [playlist_component_1.PlaylistComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map