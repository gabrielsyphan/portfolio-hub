import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {

  constructor(private http: HttpClient) { }

  getData(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  postData(url: string, data: any): Observable<any> {
    return this.http.post<any>(url, data);
  }

  putData(url: string, data: any): Observable<any> {
    return this.http.put<any>(url, data);
  }

  deleteData(url: string, id?: number): Observable<any> {
    if (id) {
      return this.http.delete<any>(url + id);
    }

    return this.http.delete<any>(url);
  }
}
