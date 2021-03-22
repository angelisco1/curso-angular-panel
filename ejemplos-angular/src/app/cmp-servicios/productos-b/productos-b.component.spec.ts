import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosBComponent } from './productos-b.component';

describe('ProductosBComponent', () => {
  let component: ProductosBComponent;
  let fixture: ComponentFixture<ProductosBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
