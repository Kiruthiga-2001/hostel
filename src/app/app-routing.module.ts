import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostelDetailComponent } from './hostel-detail/hostel-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PricingComponent } from './pricing/pricing.component';
import { AdminComponent } from './admin/admin.component';
import { SearchRoomComponent } from './searchRoom/searchRoom.component';
import { TestComponent } from './test/test.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { AvailableroomComponent } from './availableroom/availableroom.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { RoomSummaryComponent } from './room-summary/room-summary.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo: 'dashboard'
  },
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent
  },
  {
    path: 'hostel-detail',
    component: HostelDetailComponent
  },
  {
    path: 'contactUs',
    component: ContactUsComponent
  },
  {
    path: 'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'search',
    component: TestComponent
  },
  {
    path: 'form',
    component:FormComponent
  },
  {
    path: 'availableroom',
    component: AvailableroomComponent
  },
  {path: 'buses/:id',
component:SelectSeatsComponent},
{path: 'personInfo',
component:PersonInfoComponent},
{path: 'roomDetails/:id', component: RoomSummaryComponent},
{path: 'viewbooking/:id', component: ViewBookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
