import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodComponent } from './create-food.component';

describe('CreateFoodComponent', () => {
  let component: CreateFoodComponent;
  let fixture: ComponentFixture<CreateFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
