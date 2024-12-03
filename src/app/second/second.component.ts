import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import { OnInit } from '@angular/core';
import { AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-second',
  imports: [ReactiveFormsModule, CommonModule],
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
    address: this.formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    }),
    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.profileForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.profileForm.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.profileForm.reset();
  }
}
