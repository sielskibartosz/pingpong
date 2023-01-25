import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Okienko1Component } from './okienko1.component';

describe('Okienko1Component', () => {
  let component: Okienko1Component;
  let fixture: ComponentFixture<Okienko1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Okienko1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Okienko1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
