import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { FormGroup, FormControl } from '@angular/forms';
import { SecondComponent } from './second/second.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule,FirstComponent,SecondComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular';
  username:any;
  password:any;
  
  fun(){
    console.log(this.username);
    console.log(this.password);
  }

}