import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmindbComponent } from './admindb/admindb.component';

// const routes: Routes = [
//   {path:"admin",children:[
//     { path: 'home', component: AdmindbComponent },
//     { path: 'about', component: AboutComponent },
//   ]}
// ];

/**
 *
 * Configure separate module like User and Admin
 */
const routes: Routes = [
    { path: 'home', component: AdmindbComponent },
    { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
