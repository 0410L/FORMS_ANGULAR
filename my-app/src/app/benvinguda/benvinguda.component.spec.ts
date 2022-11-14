import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenvingudaComponent } from './benvinguda.component';

describe('BenvingudaComponent', () => {
  let component: BenvingudaComponent;
  let fixture: ComponentFixture<BenvingudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenvingudaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenvingudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
