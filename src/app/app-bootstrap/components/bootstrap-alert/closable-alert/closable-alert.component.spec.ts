import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosableAlertComponent } from './closable-alert.component';

describe('ClosableAlertComponent', () => {
  let component: ClosableAlertComponent;
  let fixture: ComponentFixture<ClosableAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosableAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosableAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
