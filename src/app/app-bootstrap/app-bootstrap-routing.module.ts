import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapAlertDemoComponent } from './components/bootstrap-alert/bootstrap-alert-demo.component';
import { BootstrapAccordionDemoComponent } from './components/bootstrap-accordion/bootstrap-accordion-demo.component';

const baseUri = 'bootstrap';

const routes: Routes = [
  { path: `${baseUri}/bootstrap-alert`, component: BootstrapAlertDemoComponent },
  { path: `${baseUri}/bootstrap-accordion`, component: BootstrapAccordionDemoComponent }
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
