import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

//High Charts
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

//ag-grid
import { AgGridModule } from "ag-grid-angular/main";

//ng-select
import { SelectModule } from 'ng2-select';
import { TabsModule, ButtonsModule } from 'ng2-bootstrap';

//Components
import { AppComponent } from './app.component';
import { HighChartsComponent } from './high-charts/high-charts.component';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { NgTestComponent } from './ng-test/ng-test.component';

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
    NgTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    SelectModule,
    CommonModule,
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
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
