import { Component, OnInit, Input } from '@angular/core';
import { IShip } from '../../models/ship';
import { ship1  } from '../../models/ship1';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() ship: IShip;

  Trilogy: any[] = ['Original trilogy', 'Prequel trilogy'];
  ships: ship1;

  constructor() {

    this.ships = new ship1('Millennium Falcon',
                          'http://static.srcdn.com/wp-content/uploads/millennium-falcon-space.jpg',
                          'Millennium Falcon',
                          true,
                          '1',
                          'Episode IV - A New Hope');

  }

  ngOnInit() {


  }

  setUpperCase(data: string) {
    if (data.length > 0) {
      this.ships.Name = data.charAt(0).toUpperCase() + data.slice(1);
    } else {
      this.ships.Name = data;
    }
  }

}
