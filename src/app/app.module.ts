import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {SharedModule} from './shared.module';
import {UsersModule} from './users/users.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        UsersModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}