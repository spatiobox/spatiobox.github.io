import { Component, OnInit } from '@angular/core';
@Component({ templateUrl: './templates/index.html' })


export class HomeComponent implements OnInit {
    title = 'home';

    ngOnInit(): void {
    }

    onActivate($event) { }

    onDeactivate($event) { }
}