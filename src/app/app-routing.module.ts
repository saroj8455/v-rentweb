import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ErrorComponent } from './components/error/error.component';

// const routes: Routes = [
//   {path:"", loadChildren: ()=>import("./admin/admin.module").then(m=>m.AdminModule)}
// ];

const routes: Routes = [
  {path:"",redirectTo:"landing", pathMatch:"full" },
  {path:"landing", component:LandingComponent },
  {path:"admin",loadChildren:()=>import("./admin/admin.module").then(m=>m.AdminModule)},
  {path:"user",loadChildren:()=>import("./user/user.module").then(u=>u.UserModule)},
  {path:"**",component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
