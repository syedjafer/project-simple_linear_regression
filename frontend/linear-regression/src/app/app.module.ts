import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { LrComponent } from './lr/lr.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    LrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PlotlyModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PlotlyModule
  ],
  bootstrap: [AppComponent],
  exports: [
    
  ]
})
export class AppModule { }
