import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";

@Component({
  selector: "app-scheduler",
  templateUrl: "./scheduler.component.html",
  styleUrls: ["./scheduler.component.scss"]
})
export class SchedulerComponent implements OnInit {
  dates = [
    {
      month: "March",
      day: "21",
      wkday: "Tuesday",
      slots: ["true", "false", "false"]
    },
    {
      month: "March",
      day: "28",
      wkday: "Tuesday",
      slots: ["true", "false", "true"]
    },
    {
      month: "April",
      day: "3",
      wkday: "Tuesday",
      slots: ["true", "true", "true"]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
