import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BootstrapAccordionComponent } from './components/bootstrap-accordion/accordion/bootstrap-accordion.component';
import { BootstrapAlertDemoComponent } from './components/bootstrap-alert/bootstrap-alert-demo.component';
import { AppBootstrapRoutingModule } from './app-bootstrap-routing.module';
import { BootstrapAccordionDemoComponent } from './components/bootstrap-accordion/bootstrap-accordion-demo.component';
import { AccordionOpenPanelAtATimeComponent } from './components/bootstrap-accordion/accordion-open-panel-at-a-time/accordion-open-panel-at-atime/accordion-open-panel-at-atime.component';
import { AccordionToggelComponent } from './components/bootstrap-accordion/accordion-toggel/accordion-toggel.component';
import { AccordionHeaderComponent } from './components/bootstrap-accordion/accordion-header/accordion-header.component';
import { AccordionPreventChangeComponent } from './components/bootstrap-accordion/accordion-prevent-change/accordion-prevent-change.component';
import { AccordionConfigComponent } from './components/bootstrap-accordion/accordion-config/accordion-config.component';
import { AlertBasicComponent } from './components/bootstrap-alert/alert-basic/alert-basic.component';
import { ClosableAlertComponent } from './components/bootstrap-alert/closable-alert/closable-alert.component';
import { AlertSelfClosingComponent } from './components/bootstrap-alert/alert-self-closing/alert-self-closing.component';

@NgModule({
  declarations: [BootstrapAccordionComponent, BootstrapAlertDemoComponent, BootstrapAccordionDemoComponent, AccordionOpenPanelAtATimeComponent, AccordionToggelComponent, AccordionHeaderComponent, AccordionPreventChangeComponent, AccordionConfigComponent, AlertBasicComponent, ClosableAlertComponent, AlertSelfClosingComponent],
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
