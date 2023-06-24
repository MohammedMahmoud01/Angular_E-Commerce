import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListBoxComponent } from './item-list-box.component';

describe('ItemListBoxComponent', () => {
  let component: ItemListBoxComponent;
  let fixture: ComponentFixture<ItemListBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemListBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
