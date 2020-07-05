import {Component, Input} from '@angular/core';
import {Hotel} from '../services/hotel.service';

@Component({
  selector: 'app-hotel-reviews',
  templateUrl: './hotel-reviews.component.html',
  styleUrls: ['./hotel-reviews.component.scss']
})
export class HotelReviewsComponent{
  @Input() hotel: Hotel;
}
