import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraticaMaterialComponent } from './pratica-material.component';

describe('PraticaMaterialComponent', () => {
  let component: PraticaMaterialComponent;
  let fixture: ComponentFixture<PraticaMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraticaMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PraticaMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
