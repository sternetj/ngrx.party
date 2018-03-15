import { TestModule } from './../../../test/test.module';
import { MatCardModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongTileComponent } from './song-tile.component';
import { Song } from '../../shared/models/song';

describe('SongTileComponent', () => {
  let component: SongTileComponent;
  let fixture: ComponentFixture<SongTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongTileComponent ],
      imports: [MatCardModule, TestModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongTileComponent);
    component = fixture.componentInstance;
    component.song = new Song();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
