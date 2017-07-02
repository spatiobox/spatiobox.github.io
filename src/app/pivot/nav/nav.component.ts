import { Component, OnInit } from '@angular/core';
import { ProfileService } from "app/_services/profile.service";

declare var sessionStorage: any;

@Component({
  selector: 'povit-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  navs = [];
  constructor(private $profile: ProfileService) {
    let _data = JSON.parse(sessionStorage.getItem('profile')) || [];
    console.log(_data);
    this.navs = _data.Permissions.filter(x => x.IsNav);
  }

  ngOnInit() {
  }

}
