import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Router } from "@angular/router";
import { NbAuthResult, NbAuthService } from "@nebular/auth";

@Component({
  selector: "nb-oauth2-callback",
  templateUrl: "./nb-oauth2-callback.component.html",
  styleUrls: ["./nb-oauth2-callback.component.scss"]
})
export class NbOAuth2CallbackComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private auth: NbAuthService, private router: Router) {
    this.auth
      .authenticate("google")
      .pipe(takeUntil(this.destroy$))
      .subscribe((auth: NbAuthResult) => {
        if (auth.isSuccess() && auth.getRedirect()) {
          this.router.navigateByUrl(auth.getRedirect());
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
