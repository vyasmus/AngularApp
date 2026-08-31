import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tensorflowjsc } from './tensorflowjsc';

describe('Tensorflowjsc', () => {
  let component: Tensorflowjsc;
  let fixture: ComponentFixture<Tensorflowjsc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tensorflowjsc],
    }).compileComponents();

    fixture = TestBed.createComponent(Tensorflowjsc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
