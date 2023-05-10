import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // apiKey = "8db7ac68b8322c397917a28ed95639da";
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  // apiNoLonLat = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}";

  // apiWithLonLat = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number, apiKey: string) {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    return this.http.get(url);
  }
}
