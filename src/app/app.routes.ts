import { AuthGuard } from './core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth';
import { RegisterComponent } from './pages/auth';
import { LayoutComponent } from './pages/shared';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserComponent1Component, UserComponent2Component } from './pages/user-module';
import { AdminComponent1Component, AdminComponent2Component } from './pages/admin-module';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';


export const routes: Routes = [


    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '', component: LoginComponent, pathMatch: 'full' },
    {
        path: '', component: LayoutComponent, children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'usercomp1', component: UserComponent1Component, canActivate: [AuthGuard] },
            { path: 'usercomp2', component: UserComponent2Component, canActivate: [AuthGuard] },
            { path: 'admincomp1', component: AdminComponent1Component, canActivate: [AuthGuard] },
            { path: 'admincomp2', component: AdminComponent2Component, canActivate: [AuthGuard] },
        ]
    },
    { path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];