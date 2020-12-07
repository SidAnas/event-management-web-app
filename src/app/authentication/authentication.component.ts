import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  hide = true;
  exist = false;
  user: SocialUser;

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {}

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData => {
      this.user = userData;
    }));
  }

  signOut(): void {
    this.authService.signOut();
    this.user = null;
  }
}
