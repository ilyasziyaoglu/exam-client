import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FilterComponent } from './filter/filter.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AccountComponent } from './account/account.component';



@NgModule({
  declarations: [FilterComponent, DetailComponent, CreateComponent, EditComponent, AccountComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
