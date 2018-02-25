import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWidgetComponent } from './item-widget.component';

describe('ItemWidgetComponent', () => {
  let component: ItemWidgetComponent;
  let fixture: ComponentFixture<ItemWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
