import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Advanced', 'Pro']

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
