import { TestModule } from './../../test/test.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [GameComponent],
        imports: [MatCardModule, TestModule],
        providers: [
          { provide: Store, useValue: { select: () => Observable.never(), dispatch: () => Observable.never() } },
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
