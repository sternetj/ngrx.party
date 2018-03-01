import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/never';

import { TestModule } from '../test/test.module';

import { FoodService } from './shared/services/food.service';
import { Food } from './shared/models/food';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule, MatTabsModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

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
          provide: FoodService,
          useValue: {
            create: (supply: Food) => Observable.never(),
            getAll: () => Observable.never(),
          },
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should call food service', async(() => inject([FoodService], (svc) => {
    const fixture = TestBed.createComponent(AppComponent);
    const createSpy = spyOn(svc, 'create');
    const getSpy = spyOn(svc, 'getAll');

    fixture.detectChanges();

    expect(createSpy).toHaveBeenCalled();
    expect(getSpy).toHaveBeenCalled();
  })));
});
