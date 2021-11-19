import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterformComponent } from './components/registerform/registerform.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    LoginpageComponent,
    RegisterformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
