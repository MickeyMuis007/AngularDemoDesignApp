import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaterialDatePickerComponent } from './components/material-date-picker/material-date-picker.component';
import { MaterialFormFieldComponent } from './components/material-form-field/material-form-field.component';

const baseUri = 'material';

const routes: Routes = [
  { path: `${baseUri}/material-date-picker`, component: MaterialDatePickerComponent },
  { path: `${baseUri}/material-form-field`, component: MaterialFormFieldComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppMaterialDemoRoutingModule { }
