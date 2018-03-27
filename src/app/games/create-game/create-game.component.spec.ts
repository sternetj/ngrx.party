import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule, MatInputModule, MatButtonModule, MatCheckboxModule } from '@angular/material';

import { CreateGameComponent } from './create-game.component';
import { TestModule } from '../../../test/test.module';

describe('CreateGameComponent', () => {
  let component: CreateGameComponent;
  let fixture: ComponentFixture<CreateGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGameComponent ],
      imports: [FormsModule, MatExpansionModule, MatInputModule, MatButtonModule, MatCheckboxModule, TestModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
