import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kasaragod } from './kasaragod';

describe('Kasaragod', () => {
  let component: Kasaragod;
  let fixture: ComponentFixture<Kasaragod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kasaragod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kasaragod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
