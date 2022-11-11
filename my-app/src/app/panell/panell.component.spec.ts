import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanellComponent } from './panell.component';

describe('PanellComponent', () => {
  let component: PanellComponent;
  let fixture: ComponentFixture<PanellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
