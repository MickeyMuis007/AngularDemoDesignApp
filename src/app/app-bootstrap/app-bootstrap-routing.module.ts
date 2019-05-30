import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapAlertComponent } from './components/bootstrap-alert/bootstrap-alert.component';
import { BootstrapAccordionComponent } from './components/bootstrap-accordion/bootstrap-accordion.component';

const baseUri = 'bootstrap';

const routes: Routes = [
  { path: `${baseUri}/bootstrap-alert`, component: BootstrapAlertComponent },
  { path: `${baseUri}/bootstrap-accordion`, component: BootstrapAccordionComponent }
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
export class AppBootstrapRoutingModule { }
