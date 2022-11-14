import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TornarComponent } from './tornar.component';

describe('TornarComponent', () => {
  let component: TornarComponent;
  let fixture: ComponentFixture<TornarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TornarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TornarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
