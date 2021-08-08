import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesOfficerComponent } from './sales-officer.component';

describe('SalesOfficerComponent', () => {
  let component: SalesOfficerComponent;
  let fixture: ComponentFixture<SalesOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
