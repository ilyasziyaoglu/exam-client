import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnalysisRoutingModule} from './analysis-routing.module';
import {AnalysisComponent} from './analysis.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    AnalysisComponent,
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule,
    RouterModule,
  ],
})
export class AnalysisModule {
}
