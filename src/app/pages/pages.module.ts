import {NgModule} from '@angular/core';
import {NbMenuModule} from '@nebular/theme';

import {ThemeModule} from '../@theme/theme.module';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {MiscellaneousModule} from './miscellaneus/miscellaneous.module';
import {HomeComponent} from './home/home.component';
import {ExamModule} from './exam/exam.module';
import {UserModule} from './user/user.module';
import {AnalysisModule} from './analysis/analysis.module';
import {ReportModule} from './report/report.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    MiscellaneousModule,
    ExamModule,
    UserModule,
    AnalysisModule,
    ReportModule,
  ],
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
})
export class PagesModule {
}
