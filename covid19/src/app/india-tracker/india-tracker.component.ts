import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-india-tracker',
  templateUrl: './india-tracker.component.html',
  styleUrls: ['./india-tracker.component.css']
})
export class IndiaTrackerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
