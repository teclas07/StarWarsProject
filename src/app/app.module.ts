import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { ShipService } from './shared/Ship.service';

@NgModule({
  declarations: [ AppComponent, DetailsComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ShipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
