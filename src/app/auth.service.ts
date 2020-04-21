import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var gapi: any;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.User>;
  calendarItems: any[];

  constructor(public afAuth: AngularFireAuth) {
    this.initClient();
    this.user$ = afAuth.authState;
  }

  initClient() {
    gapi.load('client', () => {
      gapi.client.init({
        apiKey: 'AIzaSyDcRMWorUdVFSbcyk2wSdfxFsP2CzxSHsA',
        clientId:
          '957272507951-kd7rmumu4q3bpdtbhhntej4vu868s6ta.apps.googleusercontent.com',
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
        ],
        scope: 'https://www.googleapis.com/auth/calendar',
      });

      gapi.client.load('calendar', 'v3', () => console.log('loaded calendar'));
    });
  }

  async login() {
    const googleAuth = gapi.auth2.getAuthInstance();
    const googleUser = await googleAuth.signIn();

    const token = googleUser.getAuthResponse().id_token;

    console.log(googleUser);

    const credential = auth.GoogleAuthProvider.credential(token);

    await this.afAuth.signInAndRetrieveDataWithCredential(credential);
  }

  logout() {
    this.afAuth.signOut();
  }
}
