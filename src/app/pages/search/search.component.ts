import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../../service/train.service';
import { APIResponse, Customer, IStation, ITrain, Search } from '../../model/train';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [DatePipe, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  trainService = inject(TrainService);
  searchData: Search = new Search();
  trainList: ITrain[] = [];
  stationList: IStation[] = [];
  selectedTrain?: ITrain;
  passenger: any = {
    passengerName: '',
    age: 0,
  };
  passengerList: any[] = [];

  loggedUserData: Customer = new Customer();
  constructor() {
    const localData = localStorage.getItem('TrainApp');
    if(localData != null){
    this.loggedUserData = JSON.parse(localData);
  }

    this.activatedRoute.params.subscribe((res: any) => {
      debugger;
      this.searchData.fromStationId = res.fromStationId;
      this.searchData.toStationId = res.toStationId;
      this.searchData.dataOfTravel = res.dataOfTravel;
      this.getSearchTrains();
    });
  }

  ngOnInit(): void {
    this.loadAllStation();
  }

  getSearchTrains() {
    this.trainService
      .getTrainsSearch(
        this.searchData.fromStationId,
        this.searchData.toStationId,
        this.searchData.dataOfTravel
      )
      .subscribe((res: any) => {
        debugger;
        this.trainList = res.data;
      });
  }
  addPassenger() {
    const strObj = JSON.stringify(this.passenger);
    const parseObj = JSON.parse(strObj);
    this.passengerList.push(this.passenger);
  }
  loadAllStation() {
    this.trainService.getAllStations().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }
  open(train: ITrain) {
    this.selectedTrain = train;
    const model = document.getElementById('Bookmodel');
    if (model != null) {
      model.style.display = 'block';
    }
  }
  close() {
    const model = document.getElementById('Bookmodel');
    if (model != null) {
      model.style.display = 'none';
    }
  }
  bookTicket() {
 debugger;
    const bookingObj={
      "bookingId":0,
      "trainId": this.selectedTrain?.trainId,
      "passengerId":this.loggedUserData.passengerID,
      "travelDate":this.searchData.dataOfTravel,
      "bookingdate": new Date(),
      "totalSeats":0,
      "TrainAppBookingpassenger": [] as any
    };
    bookingObj.TrainAppBookingpassenger = this.passengerList;
    bookingObj.totalSeats = this.passengerList.length;
    this.trainService.bookTrain(bookingObj).subscribe((res:APIResponse)=>{
      if(res.result){
        alert ("ticket booked successfully")
      }
      else(res.message)
    })
  }

}
