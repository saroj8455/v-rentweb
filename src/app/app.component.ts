import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'v-rentweb';
  apiURL = "http://dev.ocembalangir.in/";
  backendMessage="Hello World"
  constructor(private http:HttpClient){

  }

  ngOnInit(): void {
    this.http.get<any>(this.apiURL).subscribe(resp=>{
      this.backendMessage = resp.message;
    })
  }
}
