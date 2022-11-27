import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../../services/main-service.service';
import { AuthService } from '../auth.service';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface userSotreFace {
  userMsg: string
}


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  userMsg$: any



  loginForm: any
  warningMessage: any

  constructor(
    private fb: FormBuilder,
    private ServiceComponent: AuthService,
    private route: Router,
    private MainService: MainServiceService,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.userMsg$ = this.store.select('userMsg')

    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })

  }


  loginUser() {

    const user = this.loginForm.value
    this.ServiceComponent.loginUser(user).subscribe(
      {
        next: () => {
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
