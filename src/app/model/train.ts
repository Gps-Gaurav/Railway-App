export interface IStation {
  stationID :number;
  stationName : string;
  stationCode :string;
}


export class  IStation {
  fromStationId : number;
  toStationId : number;
  dataOfTravel : string;

  constructor(){
    this.fromStationId = 0;
    this.toStationId = 0;
    this.dataOfTravel = "";
  }


}
