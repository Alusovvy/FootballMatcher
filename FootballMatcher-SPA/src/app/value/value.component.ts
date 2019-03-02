import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  // error is an error and I set error in error to display my error as an error message in the console
  // sending the http get request to my api, getting json file if success, then following resposne in subscirbe
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
    this.values = response;
    }, error => {
      console.log(error);
    });
  }
}
