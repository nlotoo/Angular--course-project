import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { registerFace } from '../../interfaces/registerFace';

import { MainServiceService } from '../../services/main-service.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  registerForm: any
  errorMessage: any
  warningMessage: any = ''
  dataUsers: any

  constructor(
    private fb: FormBuilder,
    private ServiceComponent: AuthService,
    private route: Router,
    private MainService: MainServiceService
  ) {


  }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rePass: ['', Validators.required],
    })


  }

  registerUser() {

    const data = this.registerForm.value

    let reduceDate: registerFace = {
      email: data.email,
      password: data.password
    }


    this.ServiceComponent.createUser(reduceDate).subscribe({
      next: () => {
        this.route.navigate(['/'])
      },
      error: (err: any) => {

        this.errorMessage = err.error.message
        this.MainService.clearSession()
        this.route.navigate(['/register'])
      }
    })
  }


}
