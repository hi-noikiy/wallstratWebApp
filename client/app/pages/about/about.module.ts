import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {AboutHeaderComponent} from './about.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AboutHeaderComponent,
  ],
  exports: [
    AboutHeaderComponent,
  ]
})
export class AboutHeaderModule { 
}