import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPlotComponent } from './series-plot.component';

describe('SeriesPlotComponent', () => {
  let component: SeriesPlotComponent;
  let fixture: ComponentFixture<SeriesPlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesPlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
