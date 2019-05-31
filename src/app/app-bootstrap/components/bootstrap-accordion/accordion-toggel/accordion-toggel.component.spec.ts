import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionToggelComponent } from './accordion-toggel.component';

describe('AccordionToggelComponent', () => {
  let component: AccordionToggelComponent;
  let fixture: ComponentFixture<AccordionToggelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionToggelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionToggelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
