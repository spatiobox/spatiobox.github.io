import { Component } from '@angular/core';
import { ProfileService } from "app/_services/profile.service";

@Component({
    selector: 'app-nav',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent {
    title = 'nav';

    constructor(private $profile: ProfileService) {

    }
}
