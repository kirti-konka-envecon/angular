import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [ ReactiveFormsModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})

export class FirstComponent {

constructor(){
  // this.profileForm = this.formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.formBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: [''],
  //   }),
  //   aliases: this.formBuilder.array([this.formBuilder.control('')]),
  // });
}

  name = new FormControl('');
  updateName() {
    this.name.setValue('Kirti');
  }

}
