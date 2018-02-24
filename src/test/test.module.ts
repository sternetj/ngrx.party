import { NgModule } from '@angular/core';
import { OverviewStubComponent } from './stubs/overview.stub.component';
import { UserIconStubComponent } from './stubs/user-icon.stub.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [
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
