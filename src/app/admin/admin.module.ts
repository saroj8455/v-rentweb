import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindbComponent } from './admindb/admindb.component';
import { AboutComponent } from './about/about.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [
    AdmindbComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: []
})
export class AdminModule { }
