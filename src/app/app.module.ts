import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { environment } from '../environments/environment';
=======
>>>>>>> parent of 2a8bd47... handle login on auth service | register angular fire libraries in app.module

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
<<<<<<< HEAD
import { HomePageComponent } from './home-page/home-page.component';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomePageComponent],
=======
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
>>>>>>> parent of 2a8bd47... handle login on auth service | register angular fire libraries in app.module
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
<<<<<<< HEAD
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
  ],
  exports: [AppComponent],
=======
    auth,
  ],
  exports: [AppComponent],
  providers: [],
>>>>>>> parent of 2a8bd47... handle login on auth service | register angular fire libraries in app.module
  bootstrap: [AppComponent],
})
export class AppModule {}
