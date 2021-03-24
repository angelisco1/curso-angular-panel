import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMemesComponent } from './listado-memes.component';

describe('ListadoMemesComponent', () => {
  let component: ListadoMemesComponent;
  let fixture: ComponentFixture<ListadoMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoMemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
