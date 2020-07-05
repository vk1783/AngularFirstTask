import {Component, Input} from '@angular/core';
import {Hotel} from '../services/hotel.service';

@Component({
  selector: 'app-hotel-information',
  templateUrl: './hotel-information.component.html',
  styleUrls: ['./hotel-information.component.scss']
})
export class HotelInformationComponent{
  @Input() hotel: Hotel;

}
