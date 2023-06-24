import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiaomiItemsComponent } from './xiaomi-items.component';

describe('XiaomiItemsComponent', () => {
  let component: XiaomiItemsComponent;
  let fixture: ComponentFixture<XiaomiItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XiaomiItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XiaomiItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
