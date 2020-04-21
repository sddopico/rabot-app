import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { EventComponent } from './event/event.component';
import { HomePageComponent } from './home-page/home-page.component';
import { auth } from 'firebase/app';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    EventComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    auth,
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
