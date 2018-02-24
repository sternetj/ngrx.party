import { TestModule } from './../../test/test.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodComponent } from './food.component';
import { MatCardModule } from '@angular/material';

describe('FoodComponent', () => {
  let component: FoodComponent;
  let fixture: ComponentFixture<FoodComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FoodComponent],
        imports: [MatCardModule, TestModule]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
