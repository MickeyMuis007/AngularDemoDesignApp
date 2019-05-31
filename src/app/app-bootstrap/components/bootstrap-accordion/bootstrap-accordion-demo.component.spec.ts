import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapAccordionDemoComponent } from './bootstrap-accordion-demo.component';

describe('BootstrapAccordionComponent', () => {
  let component: BootstrapAccordionDemoComponent;
  let fixture: ComponentFixture<BootstrapAccordionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapAccordionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapAccordionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
