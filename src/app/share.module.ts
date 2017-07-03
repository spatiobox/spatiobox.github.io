import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
    OverlayModule
    , MdCardModule
    , MdCoreModule
    , MdIconModule
    , MdLineModule
    , MdListModule
    , MdMenuModule
    , MdTabsModule
    , MdChipsModule
    , MdInputModule
    , MdRadioModule
    , MdButtonModule
    , MdCommonModule
    , MdDialogModule
    , MdOptionModule
    , MdRippleModule
    , MdSelectModule
    , MdSliderModule
    , MdSidenavModule
    , MdToolbarModule
    , MdTooltipModule
    , MdCheckboxModule
    , MdGridListModule
    , MdSnackBarModule
    , MdExpansionModule
    , MdSelectionModule
    , MdDatepickerModule
    , MdNativeDateModule
    , MdProgressBarModule
    , MdSlideToggleModule
    , MdAutocompleteModule
    , MdButtonToggleModule
    , MdProgressSpinnerModule

} from '@angular/material';
import { I18nPipe } from "app/_pipes/i18n.pipe";


@NgModule({
    declarations: [I18nPipe],
    exports: [
        FlexLayoutModule,
        I18nPipe,

        OverlayModule

        , MdCardModule
        , MdCoreModule
        , MdIconModule
        , MdLineModule
        , MdListModule
        , MdMenuModule
        , MdTabsModule
        , MdChipsModule
        , MdInputModule
        , MdRadioModule
        , MdButtonModule
        , MdCommonModule
        , MdDialogModule
        , MdOptionModule
        , MdRippleModule
        , MdSelectModule
        , MdSliderModule
        , MdSidenavModule
        , MdToolbarModule
        , MdTooltipModule
        , MdCheckboxModule
        , MdGridListModule
        , MdSnackBarModule
        , MdExpansionModule
        , MdSelectionModule
        , MdDatepickerModule
        , MdNativeDateModule
        , MdProgressBarModule
        , MdSlideToggleModule
        , MdAutocompleteModule
        , MdButtonToggleModule
        , MdProgressSpinnerModule
    ]
})
export class ShareModule { }
