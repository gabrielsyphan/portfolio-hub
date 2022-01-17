import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public profile = false;

  constructor(private location: Location) {
   }

  ngOnInit(): void {
    (this.location.path().includes('profile')) ? this.profile = true : this.profile = false;
  }

}
