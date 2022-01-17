import { BackendRequestService } from './../../backendRequest/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-request',
  templateUrl: './api-request.component.html',
  styleUrls: ['./api-request.component.scss']
})
export class ApiRequestComponent implements OnInit {

  public contentBody: string | undefined;

  constructor(private request: BackendRequestService) { }

  ngOnInit(): void {
    this.contentBody = '{ Your code will be shown here... }';
  }

  onSubmit(event: any): void {
    event.preventDefault();
    this.contentBody = '';

    if (!event.target.requestUrl.value) {
      alert('Please enter a valid URL');
      return;
    }

    switch (event.target.requestMethod.value) {
      case 'GET':
        this.request.getData(event.target.requestUrl.value).subscribe(data => {
          this.contentBody = JSON.stringify(data);
        });
        break;
      case 'POST':
        this.request.postData(event.target.requestUrl.value, event.target.requestBody.value).subscribe(data => {
          this.contentBody = JSON.stringify(data);
        });
        break;
      case 'PUT':
        this.request.putData(event.target.requestUrl.value, event.target.requestBody.value).subscribe(data => {
          this.contentBody = JSON.stringify(data);
        });
        break;
      case 'DELETE':
        this.request.deleteData(event.target.requestUrl.value, event.target.requestBody.value).subscribe(data => {
          this.contentBody = JSON.stringify(data);
        });
        break;
    }

    if (event.target.requestRepeat.value > 0) {
      setInterval(() => {
        this.onSubmit(event);
      }, event.target.requestRepeat.value * 100000, console.log('Repeating...'));
    }
  }
}
