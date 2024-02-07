
// frontend/src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usersservice } from '../service/users.service';

@Component({
  selector: 'app-bookingmanagment',
  templateUrl: './bookingmanagment.component.html',
  styleUrls: ['./bookingmanagment.component.css'],
})
export class BookingmanagmentComponent implements OnInit {
  searchTerm: string = '';
 users: any;
  constructor(private usersservice: Usersservice) { }

  ngOnInit(): void {
    this.usersservice.getusers().subscribe(data => {
      this.users = data;
    })
  }
}
















// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-bookingmanagment',
//   templateUrl: './bookingmanagment.component.html',
//   styleUrls: ['./bookingmanagment.component.css']
// })
// export class BookingmanagmentComponent {

// }
