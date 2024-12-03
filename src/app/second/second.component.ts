import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,ValidatorFn} from '@angular/forms';
import { OnInit } from '@angular/core';
import { AbstractControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-second',
  imports: [ReactiveFormsModule, CommonModule, MatSelectModule],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss'
})
export class SecondComponent implements OnInit{
  submitted = false;
   profileForm:FormGroup;
  constructor(private formBuilder: FormBuilder) {}
   ngOnInit(): void {
    
    this.profileForm = this.formBuilder.group({
    firstName: ['', Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    lastName: ['', Validators.required, Validators.minLength(4), Validators.maxLength(20)],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    confirmPassword:['',[Validators.required]],
    street: ['', Validators.required],
    city: [0, Validators.required],
    state: ['', Validators.required],
    zip: ['', Validators.required],
    },
    {
      validators: [this.match('password', 'confirmPassword')]
    });
  }
  public match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);
  
      if (checkControl?.errors && !checkControl.errors['matching']) {
        return null;
      }
  
      if (control?.value !== checkControl?.value) {
        controls.get(checkControlName)?.setErrors({ matching: true });
        return { matching: true };
      } else {
        return null;
      }
    };
  }
  onChange(event: any){
    console.log(event.value);
  }
  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }

    console.log(JSON.stringify(this.profileForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.profileForm.reset();
  }

  city: any[] = ['Mumbai','Hyderabad'];
  
  
  

}
