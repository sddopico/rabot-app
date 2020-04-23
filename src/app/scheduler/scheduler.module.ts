import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SchedulerRoutingModule } from "./scheduler-routing.module";
import { SchedulerComponent } from "./ev-handler/scheduler.component";
import { SharedModule } from "../shared/shared.module";
import { EventComponent } from "./event/event.component";

@NgModule({
  declarations: [SchedulerComponent, EventComponent],
  imports: [CommonModule, SchedulerRoutingModule, SharedModule],
  exports: [SchedulerComponent]
})
export class SchedulerModule {}
