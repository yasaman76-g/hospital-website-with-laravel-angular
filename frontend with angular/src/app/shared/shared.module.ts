import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNotFoundComponent } from '../notfound/appnotfound.component';
import { FilterPipe } from './pipes/filter.pipe';




@NgModule({
  declarations: [
    AppNotFoundComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AppNotFoundComponent,
    FilterPipe
  ]
})
export class SharedModule { }
