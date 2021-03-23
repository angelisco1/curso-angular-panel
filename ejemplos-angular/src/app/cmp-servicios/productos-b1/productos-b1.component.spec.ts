import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosB1Component } from './productos-b1.component';

describe('ProductosB1Component', () => {
  let component: ProductosB1Component;
  let fixture: ComponentFixture<ProductosB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosB1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
