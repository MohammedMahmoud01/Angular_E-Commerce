import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleItemsComponent } from './apple-items.component';

describe('AppleItemsComponent', () => {
  let component: AppleItemsComponent;
  let fixture: ComponentFixture<AppleItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
