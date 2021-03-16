import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpInputOutputComponent } from './cmp-input-output.component';

describe('CmpInputOutputComponent', () => {
  let component: CmpInputOutputComponent;
  let fixture: ComponentFixture<CmpInputOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpInputOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpInputOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
