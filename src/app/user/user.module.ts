import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserRoutingModule } from "./user-routing.module";

import { SharedModule } from "../shared/shared.module";
import { LoginPageComponent } from "./login-page/login-page.component";

import {
  NbOAuth2AuthStrategy,
  NbAuthModule,
  NbOAuth2ResponseType
} from "@nebular/auth";
import { NbOAuth2CallbackComponent } from "./nb-oauth2-callback/nb-oauth2-callback.component";

@NgModule({
  declarations: [LoginPageComponent, NbOAuth2CallbackComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NbAuthModule.forRoot({
      strategies: [
        NbOAuth2AuthStrategy.setup({
          name: "google",
          clientId:
            "957272507951-kd7rmumu4q3bpdtbhhntej4vu868s6ta.apps.googleusercontent.com",
          clientSecret: "",
          authorize: {
            endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
            responseType: NbOAuth2ResponseType.TOKEN,
            scope:
              "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar",
            redirectUri: "http://localhost:4200/login/callback"
          }
        })
      ]
    })
  ],
  exports: [LoginPageComponent, NbOAuth2CallbackComponent],
  providers: []
})
export class UserModule {}
