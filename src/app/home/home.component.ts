import { Component, OnInit } from '@angular/core';
@Component({ templateUrl: './home.html' })


export class HomeComponent implements OnInit {
    title = 'home';

    ngOnInit(): void {
    }

    onActivate($event) { }

    onDeactivate($event) { }
}