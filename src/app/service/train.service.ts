import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  apiUrl : string = 'https://freeapi.gerasim.in/api/TrainApp/'
  constructor(private http: HttpClient) { }

  getAllStations(){
    return this.http.get(`${this.apiUrl}GetAllStations`)
  }
}
