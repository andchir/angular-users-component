import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CalendarModule} from 'primeng/calendar';

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
        NoopAnimationsModule,
        HttpClientModule,
        CalendarModule
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
        ReactiveFormsModule,
        NoopAnimationsModule,
        CalendarModule
    ]
})
export class SharedModule {
}