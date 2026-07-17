import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestfulBook } from './restful-book';

describe('RestfulBook', () => {
  let component: RestfulBook;
  let fixture: ComponentFixture<RestfulBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestfulBook],
    }).compileComponents();

    fixture = TestBed.createComponent(RestfulBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
