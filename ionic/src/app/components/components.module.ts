import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChHeaderComponent } from './ch-header/ch-header.component';

@NgModule({
  declarations: [ChHeaderComponent,],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ],
  exports: [ChHeaderComponent]
})
export class ComponentsModule { }
