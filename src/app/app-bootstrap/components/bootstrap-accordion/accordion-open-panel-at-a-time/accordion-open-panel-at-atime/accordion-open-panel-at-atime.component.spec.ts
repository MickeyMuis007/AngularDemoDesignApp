import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionOpenPanelAtATimeComponent } from './accordion-open-panel-at-atime.component';

describe('AccordionOpenPanelAtATimeComponent', () => {
  let component: AccordionOpenPanelAtATimeComponent;
  let fixture: ComponentFixture<AccordionOpenPanelAtATimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionOpenPanelAtATimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionOpenPanelAtATimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
