import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VData } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public async getData() {
    return this.http.get<VData>('./assets/data.json').toPromise();
  }
}
