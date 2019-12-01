import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student.component';
import {StudentHomeComponent} from './student-home/student-home.component';


const routes: Routes = [{
  path: '',
  component: StudentComponent,
  children: [
    {
      path: 'home',
      component: StudentHomeComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {
}
