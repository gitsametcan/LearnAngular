import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstTryComponent } from './firsttry.component';
import { SecondtryComponent } from './secondtry/secondtry.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstTryComponent,
    SecondtryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
