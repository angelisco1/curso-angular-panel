import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorMemesComponent } from './generador-memes.component';

describe('GeneradorMemesComponent', () => {
  let component: GeneradorMemesComponent;
  let fixture: ComponentFixture<GeneradorMemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorMemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorMemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
