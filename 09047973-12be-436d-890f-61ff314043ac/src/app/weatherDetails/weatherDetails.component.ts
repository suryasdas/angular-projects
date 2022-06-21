import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss']
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[];
  city: any
  details:any
  hideDetails:boolean = false
  showNoResults:boolean = false

  ngOnInit() {

  }

  cityChange(value:any){
    if(value){
      let foundCity = this.weatherData.find(city =>city.name.toLowerCase()===value.toLowerCase())
      if(foundCity){
        foundCity = this.details
        this.showNoResults = false
        this.hideDetails = false
      }
      else{
        this.showNoResults = true
        this.hideDetails = false
      }
    }
    else{
      this.showNoResults = false
      this.hideDetails = false
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}

