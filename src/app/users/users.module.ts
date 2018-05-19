import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared.module';
import {UsersService} from './services/users.service';
import {UsersComponent} from './users.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: [
        UsersService
    ],
    declarations: [
        UsersComponent
    ],
    exports: [

    ],
    entryComponents: [

    ]
})
export class UsersModule {
}