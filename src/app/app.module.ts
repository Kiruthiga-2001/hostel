import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HostelDetailComponent } from './hostel-detail/hostel-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PricingComponent } from './pricing/pricing.component';
import { AdminComponent } from './admin/admin.component';
import { SearchRoomComponent } from './searchRoom/searchRoom.component';
import { TestComponent } from './test/test.component';
import { AvailableroomComponent } from './availableroom/availableroom.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { SeatnamePipe } from './pipes/seatname.pipe';
import { PersonInfoComponent } from './person-info/person-info.component';
import { RoomSummaryComponent } from './room-summary/room-summary.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HostelDetailComponent,
    ContactUsComponent,
    LoginComponent,
    RegisterComponent,
    PricingComponent,
    FormComponent,
    AdminComponent,
      SearchRoomComponent,
      TestComponent,
      AvailableroomComponent,
      SelectSeatsComponent,
      SeatnamePipe,
      PersonInfoComponent,
      RoomSummaryComponent,
      ViewBookingComponent,
      FormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
