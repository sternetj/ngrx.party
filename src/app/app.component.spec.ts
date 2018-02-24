import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/never';

import { TestModule } from '../test/test.module';

import { SuppliesService } from './shared/services/supplies.service';
import { Supply } from './shared/models/supply';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        TestModule,
        MatDialogModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        {
          provide: SuppliesService,
          useValue: {
            create: (supply: Supply) => Observable.never(),
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

  it('should call supplies service', async(() => inject([SuppliesService], (svc) => {
    const fixture = TestBed.createComponent(AppComponent);
    const createSpy = spyOn(svc, 'create');
    const getSpy = spyOn(svc, 'getAll');

    fixture.detectChanges();

    expect(createSpy).toHaveBeenCalled();
    expect(getSpy).toHaveBeenCalled();
  })));
});
