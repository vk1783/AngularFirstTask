import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Hotel} from '../services/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent{

  @Input() hotels: Hotel[];
  @Output() onClickHotel: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  choosedHotel: Hotel;

  getAvgMark(hotel: Hotel): number {
    if (hotel.reviews.length > 0) {
      let avg = 0;
      for (const review of hotel.reviews) {
        avg = avg + review.mark;
      }
      return avg / hotel.reviews.length;
    } else {
      return 0;
    }
  }


  clickHotel(hotel: Hotel): void {
    this.choosedHotel = hotel;
    this.onClickHotel.emit(hotel);
  }
}
