import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('https://spreadsheets.google.com/feeds/list/1iYhRizb4rPVbId-UzjOEq5fZyYlKKeJF8dijVP8QdCY/1/public/values?alt=json');
  }
}