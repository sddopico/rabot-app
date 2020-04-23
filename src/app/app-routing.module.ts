import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "login",
    loadChildren: () => import("./user/user.module").then(m => m.UserModule)
  },
  {
    path: "scheduler",
    loadChildren: () =>
      import("./scheduler/scheduler.module").then(m => m.SchedulerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
