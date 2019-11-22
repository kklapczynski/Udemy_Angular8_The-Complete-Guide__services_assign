import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterComponent } from './counter/counter.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CounterService],  // available service all across the app - allows to inject into other service
  bootstrap: [AppComponent]
})
export class AppModule { }
