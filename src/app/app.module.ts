import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './components/screen1/screen1.component';
import { Screen2Component } from './components/screen2/screen2.component';
import { Screen3Component } from './components/screen3/screen3.component';
import { Screen4Component } from './components/screen4/screen4.component';
import { Screen5Component } from './components/screen5/screen5.component';
import { PageNotFoundComponent } from './errorhandling/page-not-found/page-not-found.component';
import { ErrorComponent } from './errorhandling/error/error.component';
import { AlertComponent } from './errorhandling/alert/alert.component';
import { NotificationToastersComponent } from './errorhandling/notification-toasters/notification-toasters.component';

@NgModule({
  declarations: [
    AppComponent,
    Screen1Component,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    PageNotFoundComponent,
    ErrorComponent,
    AlertComponent,
    NotificationToastersComponent,  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
