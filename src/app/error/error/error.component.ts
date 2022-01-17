import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private location: Location, private router: Router) {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("componente de erro");
  }

  onRedirectToHome(): void {
    this.router.navigate(['/']);
  }
}
