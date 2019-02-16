import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  searchText = '';
  characters = [];
  users = [];
  tdg = '';
  ser = false;

  onKey() {

if(!this.searchText) {
  this.users = [];
  this.ser = false;
} else {
this.ser = true;
  const stxt = this.searchText.toLowerCase();
  this.users = this.characters;
  
  this.users =  this.characters.filter( it => {
   return it.gsx$name.$t.toLowerCase().includes(stxt) || it.gsx$city.$t.toLowerCase().includes(stxt);
  });
}

this.tdg = this.searchText;

  };
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.characters = data.feed.entry 
    );
  }
}
