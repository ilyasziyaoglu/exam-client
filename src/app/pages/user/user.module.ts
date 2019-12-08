import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import {FilterComponent} from './filter/filter.component';
import {DetailComponent} from './detail/detail.component';
import {CreateComponent} from './create/create.component';
import {EditComponent} from './edit/edit.component';
import {AccountComponent} from './account/account.component';
import {UserComponent} from './user.component';
import {NbCardModule} from '@nebular/theme';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    UserComponent,
    AccountComponent,
    CreateComponent,
    DetailComponent,
    EditComponent,
    FilterComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NbCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class UserModule {
}
