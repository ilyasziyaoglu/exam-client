import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FilterComponent} from './filter/filter.component';
import {DetailComponent} from './detail/detail.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {AccountComponent} from './account/account.component';
import {UserComponent} from './user.component';


const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: 'filter',
      component: FilterComponent,
    },
    {
      path: 'create',
      component: CreateComponent,
    },
    {
      path: 'edit',
      component: EditComponent,
    },
    {
      path: 'detail',
      component: DetailComponent,
    },
    {
      path: 'account',
      component: AccountComponent,
    },
    {
      path: '',
      redirectTo: 'filter',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
