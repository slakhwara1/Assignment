import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgFreqCalculatorComponent } from './avg-freq-calculator.component';

describe('AvgFreqCalculatorComponent', () => {
  let component: AvgFreqCalculatorComponent;
  let fixture: ComponentFixture<AvgFreqCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvgFreqCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgFreqCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
