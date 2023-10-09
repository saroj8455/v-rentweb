import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, map, shareReplay, take } from 'rxjs';
import { PhotoService } from './services/photo.service';
import { MenuItem } from 'primeng/api';

export interface IUser {
  id: string;
  name: string;
  email: string;
  pwd: string;
}

export interface IFeedback {
  name: string;
  feedback: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'v-rentweb';
  apiURL = 'https://ocemtechzone.in/app/home';
  createAPI = `https://ocemtechzone.in/app/home/get_users`;
  backendMessage = 'Hello World';
  ratingCount = 5;
  ocemUsers: IUser[] = [];

  // RxJS interval and backedn api call
  myobs = interval(2000);
  users$ = this.http.get<IUser[]>(this.createAPI);

  displayBasic!: boolean;
  images: any[] | undefined;
  responsiveOptions: any[] | undefined;
  responsiveFeedback: any[] | undefined;
  // feedbackRecords=[1,2,3,4,5,6,7,8];
  feedbackRecords: IFeedback[] = [
    {
      name: 'Navin Readdy',
      feedback:
        'I wanted to share my sincere appreciation for the exceptional rental experience I recently had with Vrent. From the moment I inquired about the property to the day I returned the keys, your team demonstrated a level of professionalism and efficiency that truly stood out.',
    },
    {
      name: 'Deepak Ku. Mahapatra',
      feedback:
        'The rental process was remarkably smooth, thanks to your user-friendly online platform and the prompt responses from your customer service team. They were not only knowledgeable but also went the extra mile to ensure all my questions were answered and concerns addressed.',
    },
    {
      name: 'Jhon Smith',
      feedback:
        "I appreciate the transparency in your pricing and the fairness in your policies. It's evident that your company values customer satisfaction and strives to create a positive experience for every tenant.",
    },
    {
      name: 'Subrat',
      feedback:
        'I will undoubtedly be recommending your rental services to friends and colleagues. Thank you for making my stay a pleasant one. I look forward to future engagements with your company.',
    },
    {
      name: 'Azad',
      feedback:
        'Upon arrival at the property, I was delighted to find it exactly as described - clean, well-maintained, and fully equipped. The attention to detail in preparing the space did not go unnoticed, and it significantly enhanced my overall stay.',
    },
  ];

  // Editor
  text!: string;
  textCopied!: string;

  // Initial Menubar
  items!: MenuItem[];

  constructor(private http: HttpClient, private photoService: PhotoService) {}

  ngOnInit(): void {
    this.fetchUsers();
    // subscribe the timer
    this.myobs.subscribe((c) => {
      // Get JSON placeholder API
      // this.getTodos(c+1).subscribe(resp=>{
      //   // Get todos every 2 sec
      //   // console.log(resp);
      //   this.fetchUsers();
      // })
    });

    // init Galleria
    this.photoService.getImages().then((images) => (this.images = images));
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
    // Inital carasoul
    this.responsiveFeedback = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    // call initManubar
    this.initMenubar();
  }

  getMessage() {
    return this.http.get<IUser[]>(this.createAPI);
  }

  fetchUsers() {
    let url = `https://ocemtechzone.in/app/home/get_users`;
    this.http
      .get<IUser[]>(url)
      .pipe(shareReplay())
      .subscribe((users) => {
        this.ocemUsers = users;
      });
  }

  getTodos(id: number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  }

  // Editor copy
  copyClipboard(text: string) {
    console.log(text);
    this.textCopied = text;
  }

  initMenubar() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus',
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
          {
            label: 'Archieve',
            icon: 'pi pi-fw pi-calendar-times',
            items: [
              {
                label: 'Remove',
                icon: 'pi pi-fw pi-calendar-minus',
              },
            ],
          },
        ],
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
