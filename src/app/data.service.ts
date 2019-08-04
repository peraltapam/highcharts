import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class DataService {

    constructor(private httpService: HttpClient) { }

    getData() {
      return this.httpService.get<any>('../../assets/get_metrics.json');
    }
  }