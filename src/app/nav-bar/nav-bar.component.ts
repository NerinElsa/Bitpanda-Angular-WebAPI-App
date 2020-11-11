import { Component, OnInit } from '@angular/core';
//import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  searchTerm: string;

  constructor() { }

  ngOnInit() {
  }

}
