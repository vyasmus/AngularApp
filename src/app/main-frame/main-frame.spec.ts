import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFrame } from './main-frame';
import { provideRouter } from '@angular/router';

describe('MainFrame', () => {
  let component: MainFrame;
  let fixture: ComponentFixture<MainFrame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFrame],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MainFrame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
