import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MainServiceService } from '../../services/main-service.service';
import { AuthService } from '../auth.service';


interface AppStoreFace {
  message: string;

}

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  loginForm: any
  warningMessage: any
  container: any

  constructor(
    private fb: FormBuilder,
    private ServiceComponent: AuthService,
    private route: Router,
    private MainService: MainServiceService,
    private store: Store<AppStoreFace>,
  ) { }

  ngOnInit(): void {
    this.container = this.store.select('message')
    console.log(this.container)

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
