
import { Injectable } from '@angular/core';
import { IShip } from '../../models/ship';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShipService {
    constructor(private http: Http) {}

    getShips(): Observable<IShip[]> {
        return this.http.get('./api/ships.json')
            .map((response: Response) => {
                return <IShip[]>response.json().data;
            });
    }
}
