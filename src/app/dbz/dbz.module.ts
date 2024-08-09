import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz.component';
import { ListComponent } from './components/list/list.component';
import { DbzFormComponent } from './components/list/dbz-form/dbz-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzComponent,
    ListComponent,
    DbzFormComponent
  ],
  exports:[
    DbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
