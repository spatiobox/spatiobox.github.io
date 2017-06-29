import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationComponent } from "app/navigation/navigation.component";
import { ProfileService } from "app/_services/profile.service";


@NgModule({
    declarations: [
        NavigationComponent
    ],
    imports: [

    ],
    providers: [ProfileService],
    exports: [NavigationComponent]
})
export class NavigationModule { }
