import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BackendInterceptor} from './backend-interceptor/BackendInterceptor';
import {HomeComponent} from './home/home.component';
import {EquipmentListComponent} from './equipmentList/equipmentList.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        EquipmentListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
    ],
    providers: [
        // Leverage a bogus backend so we don't have to stand something up somewhere on the internet.
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BackendInterceptor,
            multi: true
        },
    ],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule {
}
