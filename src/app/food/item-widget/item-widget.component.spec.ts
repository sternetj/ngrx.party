import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule, MatIconModule, MatCardModule } from '@angular/material';

import { ItemWidgetComponent } from './item-widget.component';
import { TestModule } from '../../../test/test.module';
import { Supply } from '../../shared/models/supply';

describe('ItemWidgetComponent', () => {
  let component: ItemWidgetComponent;
  let fixture: ComponentFixture<ItemWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemWidgetComponent ],
      imports: [TestModule, MatTooltipModule, MatIconModule, MatCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWidgetComponent);
    component = fixture.componentInstance;

    component.supply = new Supply();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
