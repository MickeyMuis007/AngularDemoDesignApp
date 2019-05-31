import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BootstrapAccordionComponent } from './components/bootstrap-accordion/accordion/bootstrap-accordion.component';
import { BootstrapAlertComponent } from './components/bootstrap-alert/bootstrap-alert.component';
import { AppBootstrapRoutingModule } from './app-bootstrap-routing.module';
import { BootstrapAccordionDemoComponent } from './components/bootstrap-accordion/bootstrap-accordion-demo.component';
import { AccordionOpenPanelAtATimeComponent } from './components/bootstrap-accordion/accordion-open-panel-at-a-time/accordion-open-panel-at-atime/accordion-open-panel-at-atime.component';
import { AccordionToggelComponent } from './components/bootstrap-accordion/accordion-toggel/accordion-toggel.component';

@NgModule({
  declarations: [BootstrapAccordionComponent, BootstrapAlertComponent, BootstrapAccordionDemoComponent, AccordionOpenPanelAtATimeComponent, AccordionToggelComponent],
  imports: [
    CommonModule,
    AppBootstrapRoutingModule,
    NgbModule,
    BrowserModule
  ],
  exports: [
  ]
})
export class AppBootstrapModule { }
