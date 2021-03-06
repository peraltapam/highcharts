import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Chart } from '../models/chart.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpService: HttpClient) { }

  getData() {
    // return this.httpService.get<Chart>('../../assets/get_metrics.json');
    return this.httpService.get<Chart>('http://localhost:3000/api')
  }
}