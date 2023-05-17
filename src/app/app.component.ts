import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_app';
  colSpanValue = 2;
  arrayOfColors = ["red", "blue", "green"]
  myAge : number = 31;

  getCurrentDate(): string{
    return new Date().toDateString()
  }

  onSaveButtonClickEvent(event: any): void{
    console.log("saving!")
    console.log(event)
  }  

  onValueChange(event: any): void{
    console.log("value changed!")
    console.log("new value:", event.srcElement.value)
    console.log("but we don't have to go via the event because we are using two way binding")
    console.log(this.myAge)
  }

  constructor(private router: Router) {}

  goToCountry(countryName: string) {
    this.router.navigate(['country', countryName]);
  }

  goToMainPage() {
    this.router.navigate(['home']);
  }

}
