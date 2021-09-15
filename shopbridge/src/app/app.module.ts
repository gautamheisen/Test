import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UpdateInventoryComponent } from './update-inventory/update-inventory.component';
import {testDirective} from './custdirective';
import {SearchPipe} from './custpipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    InventoryComponent,
    UpdateInventoryComponent,
    testDirective,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
