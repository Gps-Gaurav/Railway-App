import { Component, inject, OnInit } from '@angular/core';
import { TrainService } from '../../service/train.service';
import { IStation } from '../../model/train';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  trainService = inject(TrainService);
  stationList: IStation[] = [];

  ngOnInit(): void {
    this.loadAllStation();
  }
  loadAllStation() {
    this.trainService.getAllStations().subscribe((res: any) => {
      this.stationList = res.data;
    });
  }
}
