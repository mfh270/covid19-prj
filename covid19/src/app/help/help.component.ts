import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  dataSource = [
    {position: 1, name: 'Andhra Pradesh', number: '0866-2410978'},
    {position: 2, name: 'Arunachal Pradesh ', number: 104},
    {position: 3, name: 'Assam', number: 104},
    {position: 4, name: 'Bihar', number: '104/ 0612-2217681, 2233806'},
    {position: 5, name: 'Chhattisgarh', number: '0771-282113, 2446607, 2440608'},
    {position: 6, name: 'Goa', number: 104},
    {position: 7, name: 'Gujarat', number: '104/ 079-23251900, 23251908'},
    // {position: 8, name: '', number: },
    // {position: 9, name: '', number: },
    // {position: 10, name: '', number: },
    // {position: 11, name: '', number: },
    // {position: 12, name: '', number: },
    // {position: 13, name: '', number: },
    // {position: 14, name: '', number: },
    // {position: 15, name: '', number: },
    // {position: 16, name: '', number: },
    // {position: 17, name: '', number: },
    // {position: 18, name: '', number: },
    // {position: 19, name: '', number: },
    // {position: 20, name: '', number: },
    // {position: 21, name: '', number: },
    // {position: 22, name: '', number: },
    // {position: 23, name: '', number: },
    // {position: 24, name: '', number: },
    // {position: 25, name: '', number: },
    // {position: 26, name: '', number: },
    // {position: 27, name: '', number: },
    // {position: 28, name: '', number: },
    // {position: 29, name: '', number: },
    // {position: 30, name: '', number: },
    // {position: 31, name: '', number: },
    // {position: 32, name: '', number: },
    // {position: 33, name: '', number: },
    // {position: 34, name: '', number: },
    // {position: 35, name: '', number: },
    // {position: 36, name: '', number: },    
  ];
  displayedColumns: string[] = ['position', 'name', 'number'];
  // dataSource = this.data;
  
  constructor() { }

  ngOnInit(): void {
  }

}
