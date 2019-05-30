import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialDatePickerComponent } from './components/material-date-picker/material-date-picker.component';
import { MaterialFormFieldComponent } from './components/material-form-field/material-form-field.component';
import { AppMaterialDemoRoutingModule } from './app-material-demo-routing.module';

@NgModule({
  declarations: [MaterialDatePickerComponent, MaterialFormFieldComponent],
  imports: [
    CommonModule,
    AppMaterialDemoRoutingModule
  ], 
  exports: [MaterialDatePickerComponent, MaterialFormFieldComponent]
})
export class AppMaterialDemoModule { }
