import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonUpcComponent } from './boton-upc.component';

describe('BotonUpcComponent', () => {
  let component: BotonUpcComponent;
  let fixture: ComponentFixture<BotonUpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonUpcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotonUpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
