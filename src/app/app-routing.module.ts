import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './home/customers/customers.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
     {
    path: 'home', redirectTo: '/home', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
