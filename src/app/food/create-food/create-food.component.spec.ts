import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule, MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

import { CreateFoodComponent } from './create-food.component';
import { TestModule } from '../../../test/test.module';

describe('CreateFoodComponent', () => {
  let component: CreateFoodComponent;
  let fixture: ComponentFixture<CreateFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateFoodComponent ],
      imports: [FormsModule, MatExpansionModule, MatInputModule, MatButtonModule, MatCheckboxModule, TestModule]
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
