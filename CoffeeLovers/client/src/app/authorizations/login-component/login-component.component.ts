import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../../services/main-service.service';
import { AuthService } from '../auth.service';

import { extarnalUserData } from 'src/app/NgRx/reducer/userData.reducer';
import { userInfo } from 'src/app/NgRx/actions/userData.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  loginForm: any
  warningMessage: any

  userInfo$: any

  constructor(
    private fb: FormBuilder,
    private ServiceComponent: AuthService,
    private route: Router,
    private MainService: MainServiceService,
    private store: Store,
  ) {


    this.userInfo$ = store.select((state) => console.log(state))
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }


  loginUser() {

    const user = this.loginForm.value
    this.ServiceComponent.loginUser(user).subscribe(
      {
        next: (data: object) => {
          console.log(data)
          extarnalUserData(data);
          this.route.navigate(['/'])
        },
        error: (err: any) => {
          console.log(err)
          this.warningMessage = err.error.message
          this.MainService.clearSession()
        }
      }
    )


  }

}
