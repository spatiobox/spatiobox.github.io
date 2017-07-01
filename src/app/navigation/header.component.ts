import { Component } from '@angular/core';
import { ProfileService } from "app/_services/profile.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    title = 'header';

    constructor(private $profile: ProfileService) {

    }
}
