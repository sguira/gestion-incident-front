import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './page/ticket/ticket.component';
import { AddTicketComponent } from './page/add-ticket/add-ticket.component';
import { ContactComponent } from './page/contact/contact.component';
import { SignInComponent } from './page/sign-in/sign-in.component';
import { LoginComponent } from './page/login/login.component';
import { ListAdminComponent } from './page/list-admin/list-admin.component';
import { ProfileComponent } from './page/profile/profile.component';
import { AccueilComponent } from './page/accueil/accueil.component';
import { DetailsTicketComponent } from './page/details-ticket/details-ticket.component';
import { DetailsComponent } from './page/details/details.component';
import { ReparationComponent } from './page/reparation/reparation.component';
import { AuthGuard } from './guard/auth.guard';
import { AddTechnicienComponent } from './page/admin/add-technicien/add-technicien.component';
import { ConfirmComponent } from './page/confirm/confirm.component';



const routes: Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
    path:'ticket',
    component:TicketComponent
  },{
    path:'add-ticket',
    component:AddTicketComponent
  },{
    path:'contact',
    component:ContactComponent
  },
  {
    path:'create-account',
    component: SignInComponent
  },
  {
    path:'login',
    component:LoginComponent,

  },
  {
    path:'list',
    component:ListAdminComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:'accueil',
    component:AccueilComponent
  },
  {
    path:'details-tickets/:id',
    component:DetailsTicketComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:'update-ticket/:id',
    component:AddTicketComponent,
    canActivate:[AuthGuard]
  }
  ,
  {
    path:'details/:id',
    component:DetailsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'attribution/:id/:type',
    component:ReparationComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-technicien',
    component:AddTechnicienComponent
  },
  {
    path:'confirm-compte',
    component:ConfirmComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
