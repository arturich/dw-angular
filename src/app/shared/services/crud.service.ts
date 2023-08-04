import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  protected endpoint : string = '';

  constructor(protected httpClient : HttpClient) {
      
   }

   getItems() : Observable<any[]> {
      const url: string = environment.apiUrl + this.endpoint;
      return this.httpClient.get<any[]>(url);
   }

     getItemById(id: string) : Observable<any> {
      const url: string = `${environment.apiUrl}${this.endpoint}/${id}`;
      return this.httpClient.get<any>(url); 
    }

    create(data : any) : Observable<any> {
      const url: string = `${environment.apiUrl}${this.endpoint}`;
      return this.httpClient.post<any>(url, data);
    }
}

