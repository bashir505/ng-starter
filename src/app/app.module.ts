import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//High Charts
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

//ag-grid
import { AgGridModule } from "ag-grid-angular/main";

//Components
import { AppComponent } from './app.component';
import { HighChartsComponent } from './high-charts/high-charts.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  dd(hc);
  return hc;
}




@NgModule({
  declarations: [
    AppComponent,
    HighChartsComponent,
    AgGridComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    AgGridModule
      .withComponents(
      [AgGridComponent,
      ]
      )
  ],
  providers: [
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
