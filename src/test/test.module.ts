import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OverviewStubComponent } from './stubs/overview.stub.component';
import { UserIconStubComponent } from './stubs/user-icon.stub.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFoodStubComponent } from './stubs/create-food.stub.component';
import { ItemWidgetStubComponent } from './stubs/item-widget.stub.component';
import { SearchResultStubComponent } from './stubs/search-result.stub.component';
import { SongTileStubComponent } from './stubs/song-tile.stub.component';
import { SongSearchStubComponent } from './stubs/song-search.stub.component';

const COMPONENTS = [
  CreateFoodStubComponent,
  ItemWidgetStubComponent,
  OverviewStubComponent,
  SearchResultStubComponent,
  SongSearchStubComponent,
  SongTileStubComponent,
  UserIconStubComponent
];

@NgModule({
  imports: [
    NoopAnimationsModule,
    FormsModule,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS,
    FormsModule
  ]
})
export class TestModule {}
