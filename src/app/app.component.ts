import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, map, shareReplay, take } from 'rxjs';
import { PhotoService } from './services/photo.service';

export interface IUser {
  id: string
  name: string
  email: string
  pwd: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'v-rentweb';
  apiURL = "https://ocemtechzone.in/app/home";
  createAPI = `https://ocemtechzone.in/app/home/get_users`;
  backendMessage="Hello World";
  ratingCount=5;
  ocemUsers:IUser[] = [];

  // RxJS interval and backedn api call
  myobs = interval(2000);
  users$ = this.http.get<IUser[]>(this.createAPI);

  displayBasic!: boolean;
  images: any[] | undefined;
  responsiveOptions: any[] | undefined;

  // Editor
  text!: string;
  textCopied !: string;

  constructor(private http:HttpClient,private photoService:PhotoService){

  }

  ngOnInit(): void {

    this.fetchUsers();
    // subscribe the timer
    this.myobs.subscribe((c)=>{
      // Get JSON placeholder API
      // this.getTodos(c+1).subscribe(resp=>{
      //   // Get todos every 2 sec
      //   // console.log(resp);
      //   this.fetchUsers();
      // })

    })

    // init Galleria
    this.photoService.getImages().then((images) => (this.images = images));
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
  }

  getMessage(){
    return this.http.get<IUser[]>(this.createAPI);
  }

  fetchUsers() {
    let url = `https://ocemtechzone.in/app/home/get_users`;
    this.http.get<IUser[]>(url).pipe(shareReplay()).subscribe(users=>{
      this.ocemUsers = users;
    })
  }

  getTodos(id:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  // Editor copy
  copyClipboard(text:string) {
    console.log(text);

    this.textCopied = text
  }
}
