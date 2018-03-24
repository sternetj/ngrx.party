import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule, MatIconModule, MatCardModule } from '@angular/material';

import { GameWidgetComponent } from './game-widget.component';
import { TestModule } from '../../../test/test.module';
import { Game } from '../../shared/models/game';

describe('GameWidgetComponent', () => {
  let component: GameWidgetComponent;
  let fixture: ComponentFixture<GameWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWidgetComponent ],
      imports: [TestModule, MatTooltipModule, MatIconModule, MatCardModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWidgetComponent);
    component = fixture.componentInstance;

    component.game = new Game();
    component.game.user = { name: 'test', logo: '' };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
