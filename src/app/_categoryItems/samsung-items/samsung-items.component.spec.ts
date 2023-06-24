import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamsungItemsComponent } from './samsung-items.component';

describe('SamsungItemsComponent', () => {
  let component: SamsungItemsComponent;
  let fixture: ComponentFixture<SamsungItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamsungItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamsungItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
