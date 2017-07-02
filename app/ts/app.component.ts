import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:[PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos:Array<Video>;

    constructor(){
        this.videos = [
            new Video(1, "Black Panther ", "dxWvtMOGAhw", "Black Panther is an upcoming American superhero film based on the Marvel Comics character of the same name."),
            new Video(2, "Marvel's Inhumans", "1sYF1SXcWqQ", "Marvel's Inhumans, or simply Inhumans, is an upcoming American television series developed for ABC, based on the Marvel Comics race of the same name."),
            new Video(3, "VIP 2", "qecBCwtjBwE", "Velaiilla Pattadhari 2, popularly referred to as VIP 2, is an upcoming Tamil action-comedy-drama film directed by Soundarya Rajnikanth."),
            new Video(4, "Jumanji 2", "87VjWSar6jE", "Four high school kids discover an old video game console and are drawn into the game's jungle setting, literally becoming the adult avatars they chose. What they discover is that you don't just play Jumanji - you must survive it.")
        ]
    }
}






