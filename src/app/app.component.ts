import { Component, OnInit } from '@angular/core';
import { IShip } from '../models/ship';
import { ShipService } from './shared/Ship.service';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ships: Observable<IShip[]>;
  selectedShip: IShip = { Name: '', Description: '', Foto: '', isEmpire: false, Trilogy: 1, Movie: '' };

  constructor(private shipService: ShipService) {}

  ngOnInit() {
    this.ships = this.shipService.getShips();
  }

  setSelectedShip(data: IShip) {
    this.selectedShip = data;
  }


}
