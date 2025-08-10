import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlepage } from './singlepage';

describe('Singlepage', () => {
  let component: Singlepage;
  let fixture: ComponentFixture<Singlepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singlepage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
