export interface IStation {
  stationID :number;
  stationName : string;
  stationCode :string;
}


export class  Search {
  fromStationId : number;
  toStationId : number;
  dataOfTravel : string;

  constructor(){
    this.fromStationId = 0;
    this.toStationId = 0;
    this.dataOfTravel = "";
  }


}

export interface ITrain{
  trainId : number;
  trainNo: number;
  trainName: string;
  departureStationName: string;
  arrivalStationName: string;
  arrivalTime: string;
  departureTime: string;
  totalSeats: number;
  departureDate: string;
  bookedSeats: number;
}
