import { NgModule } from '@angular/core';
import { OverviewStubComponent } from './stubs/overview.stub.component';

const COMPONENTS = [
  OverviewStubComponent,
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class TestModule {}
