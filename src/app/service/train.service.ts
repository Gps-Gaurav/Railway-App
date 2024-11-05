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
  getTrainsSearch(from:number, to:number, date:string){
    return this.http.get(`${this.apiUrl}
https://freeapi.miniprojectideas.com/api/TrainApp/GetTrainsBetweenStations?departureStationId=${from}&arrivalStationId=${to}&departureDate=${date}`)
  }
}
