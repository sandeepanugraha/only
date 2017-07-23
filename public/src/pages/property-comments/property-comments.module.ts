import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PropertyCommentsPage } from './property-comments';

@NgModule({
  declarations: [
    PropertyCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(PropertyCommentsPage),
  ],
  exports: [
    PropertyCommentsPage
  ]
})
export class PropertyCommentsPageModule {}
