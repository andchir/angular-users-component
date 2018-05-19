import {Component, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {PaginationComponent} from './components/pagination.component';

// Common components
const components: any[] = [
    PaginationComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [
        ...components
    ],
    providers: [

    ],
    exports: [
        ...components,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class SharedModule {
}