import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthComponent } from './auth/auth.component';

import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path : "", redirectTo: "main", pathMatch: "full"
  },
  {
    path: "main", component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "signin", component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
