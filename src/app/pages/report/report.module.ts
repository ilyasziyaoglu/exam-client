import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportRoutingModule} from './report-routing.module';
import {ReportComponent} from './report.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ReportComponent,
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    RouterModule,
  ],
})
export class ReportModule {
}
