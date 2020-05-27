import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarrraHorizontalComponent } from './grafico-barrra-horizontal.component';

describe('GraficoBarrraHorizontalComponent', () => {
  let component: GraficoBarrraHorizontalComponent;
  let fixture: ComponentFixture<GraficoBarrraHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoBarrraHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarrraHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
