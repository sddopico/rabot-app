import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbActionsModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: "dark" })
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbThemeModule
  ]
})
export class SharedModule {}
