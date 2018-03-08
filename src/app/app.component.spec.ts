import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/never';

import { TestModule } from '../test/test.module';

import { Food } from './shared/models/food';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule, MatTabsModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { WebSocketService } from './shared/services/websocket.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        TestModule,
        MatDialogModule,
        MatTabsModule,
        StoreModule.forRoot({}),
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        {
          provide: WebSocketService,
          useValue: {},
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
