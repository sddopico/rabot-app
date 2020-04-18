import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbIconModule,
  NbActionsModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbEvaIconsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    RouterModule,
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
  ],
})
export class SharedModule {}
