import { Component, HostListener } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  weather: any;
  weatherTime:  string = "";
  city : string = "";
  tempretre: number = 0;
  weatherIcon : string = "";
  isScrolled = false;

  constructor(private weather_s: WeatherService) {}


  getWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const apiKey = '8db7ac68b8322c397917a28ed95639da';

      this.weather_s.getWeather(lat, lon, apiKey)
        .subscribe((data) => {
          this.weather = data;
          this.weatherTime = this.weather.weather[0].main;
          this.city = this.weather.name;
          this.tempretre = this.weather.main.temp.toString().substring(0, 2);
          this.weatherIcon = 'http://openweathermap.org/img/wn/' + this.weather.weather[0].icon + '@2x.png';
          console.log(this.weather)
          console.log(this.weather.name)
          console.log(this.weather.weather[0].main)
          console.log(this.weather.weather[0].icon)
          console.log(this.weather.main.temp.toString().substring(0, 2))
          
          

        });
    });
  }


  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 0) {
      this.getWeather();
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
      
    }
  }


}
