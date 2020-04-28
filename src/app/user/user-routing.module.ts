import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { NbOAuth2CallbackComponent } from "./nb-oauth2-callback/nb-oauth2-callback.component";

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  {
    path: "callback",
    component: NbOAuth2CallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
