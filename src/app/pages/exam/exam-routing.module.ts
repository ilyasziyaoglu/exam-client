import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilterComponent} from './filter/filter.component';
import {SearchComponent} from './search/search.component';
import {DetailComponent} from './detail/detail.component';
import {ResultComponent} from './result/result.component';
import {ExamComponent} from './exam.component';


const routes: Routes = [{
  path: '',
  component: ExamComponent,
  children: [
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'filter',
      component: FilterComponent,
    },
    {
      path: 'detail',
      component: DetailComponent,
    },
    {
      path: 'result',
      component: ResultComponent,
    },
    {
      path: 'editor',
      loadChildren: () => import('./editor/editor.module')
        .then(m => m.EditorModule),
    },
    {
      path: 'live-exam',
      loadChildren: () => import('./live-exam/live-exam.module')
        .then(m => m.LiveExamModule),
    },
    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamRoutingModule { }
