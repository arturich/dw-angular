import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  protected endpoint : string = '';

  constructor(private httpClient : HttpClient) {
      
   }

   getItems() : Observable<any[]> {
      const url: string = environment.apiUrl + this.endpoint;
      return this.httpClient.get<any[]>(url);
   }
}

