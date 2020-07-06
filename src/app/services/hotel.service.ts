import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Review {
  mark: number;
  name: string;
  text: string;
}

export interface Hotel {
  title: string;
  address: string;
  phone: string;
  description: string;
  image: string;
  reviews: Review[];
}

@Injectable()
export class HotelService {

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>('assets/hotels.json');
  }

}
