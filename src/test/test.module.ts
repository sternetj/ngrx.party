import { NgModule } from '@angular/core';
import { OverviewStubComponent } from './stubs/overview.stub.component';
import { UserIconStubComponent } from './stubs/user-icon.stub.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CreateFoodStubComponent } from './stubs/create-food.stub.component';
import { ItemWidgetStubComponent } from './stubs/item-widget.stub.component';

const COMPONENTS = [
  CreateFoodStubComponent,
  ItemWidgetStubComponent,
  OverviewStubComponent,
  UserIconStubComponent
];

@NgModule({
  imports: [
    NoopAnimationsModule,
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class TestModule {}
