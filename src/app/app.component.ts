import {Component, OnInit} from '@angular/core';
import {HotelService, Hotel} from './services/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HotelService]
})
export class AppComponent implements OnInit {
  hotels: Hotel[] = [];
  choosedHotel: Hotel;

  constructor(private hotelService: HotelService) {
  }

  getHotels(): void {
    this.hotelService.getHotels().subscribe(hotels => {
      this.hotels = hotels;
      console.log(hotels);
    });
  }

  ngOnInit() {
    this.getHotels();
  }

  changeChoosedHotel(hotel: Hotel): void {
    this.choosedHotel = hotel;
  }
}
