import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbActionsModule
} from "@nebular/theme";

import { NbEvaIconsModule } from "@nebular/eva-icons";
import { ShellComponent } from "./shell/shell.component";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { NbAuthModule } from "@nebular/auth";

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: "dark" }),
    RouterModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NbAuthModule
  ],
  exports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbThemeModule,
    ShellComponent,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    NbAuthModule
  ]
})
export class SharedModule {}
