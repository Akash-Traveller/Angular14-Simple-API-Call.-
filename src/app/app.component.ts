import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-postapi';

  constructor(private http:HttpClient) {}

  onFormSubmit(
    products: {name: string , address: string , country: string}
  ) {
    console.log(products)
    this.http.post('https://mocki.io/v1/de607919-7052-4e33-ae7d-d6292e03cd73',products)
    .subscribe((res) => {
       console.log("LEft",res);
    })
  }
}
