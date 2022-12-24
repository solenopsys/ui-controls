import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SelectComponent} from "./select/select.component";
import {FormsModule} from "@angular/forms";
import {SelectSaveComponent} from "./select-save/select-save.component";

import {ButtonGroupComponent} from "./buttons-group/button-group.component";

import {VideoComponent} from "./video/video.component";
import {PathTreeComponent} from "./path-tree/path-tree.component";

import {DeclaredService, UtilsModule} from "@solenopsys/uimatrix-utils";
import {ButtonComponent} from "./button/button.component";
import {IconButtonComponent} from "./icon-button/icon-button.component";
import {DataViewComponent} from "./data-view/data-view.component";

export interface ActionButton {
    key: string;
    title: string;
    icon: string;
}


const components = [
    SelectComponent, IconButtonComponent, DataViewComponent, ButtonComponent,
    SelectSaveComponent, ButtonGroupComponent, VideoComponent, PathTreeComponent];

@NgModule({
    declarations: components,
    imports: [CommonModule, FormsModule, UtilsModule],
    exports: [
        IconButtonComponent,
        SelectSaveComponent,
        ButtonGroupComponent,
        SelectComponent,
        PathTreeComponent,
        ButtonComponent
    ]
})
export class UIControlsModule {
    constructor(private ds: DeclaredService) {
        ds.addComps("@solenopsys/uimatrix-controls", components)
    }
}
