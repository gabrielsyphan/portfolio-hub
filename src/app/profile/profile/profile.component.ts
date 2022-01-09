import { Component, OnInit } from '@angular/core';
import Item from 'src/app/shared/models/Item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profiles: Item[] = [];

  constructor() { 
    this.profiles = [
      new Item('Github', 'http://github.com/gabrielsyphan'),
      new Item('Linkedin', 'https://www.linkedin.com/in/gabrielsyphan'),
      new Item('Instagram', 'https://instagram.com/gabrielsyphan')
    ];
  }

  ngOnInit(): void {
  }

}
