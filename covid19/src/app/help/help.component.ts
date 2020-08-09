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
    {position: 8, name: 'Haryana', number: '0172-2545938' },
    {position: 9, name: 'Himachal Pradesh', number: '104/ 0177-2628940, 2629439' },
    {position: 10, name: 'Jharkhand', number: '104/ 181/ 0651-2282201, 2284185, 223488' },
    {position: 11, name: 'Karnataka', number: '104/ 080-46848600 / 1075' },
    {position: 12, name: 'Kerala', number: '0471-2552056, 25521056' },
    {position: 13, name: 'Madhya Pradesh', number: '104/ 1075/ 181/ 0755-2411180,2704201, 0729-22344' },
    {position: 14, name: 'Maharashtra', number: '022-22024535' },
    {position: 15, name: 'Manipur', number: '1800-345-3818' },
    {position: 16, name: 'Meghalaya', number: '108/ 0364-2224100, 2590623' },
    {position: 17, name: 'Mizoram', number: '102' },
    {position: 18, name: 'Nagaland', number: '0370-2291122, 2270338' },
    {position: 19, name: 'Odisha', number: '104, 0674-2534177' },
    {position: 20, name: 'Punjab', number: '104' },
    {position: 21, name: 'Rajasthan', number: '0141-2225000, 2225624' },
    {position: 22, name: 'Sikkim', number: '104/ 03592-284444' },
    {position: 23, name: 'Tamil Nadu', number: '044-29510500, 25615025' },
    {position: 24, name: 'Telangana', number: '104/ 040-23286100' },
    {position: 25, name: 'Tripura', number: '0381-2315879, 2412424, 2413434' },
    {position: 26, name: 'Uttar Pradesh', number: '0522-2237515' },
    {position: 27, name: 'Uttarakhand', number: '104' },
    {position: 28, name: 'West Bengal', number: '1800-313-444222, 033-23412600' },
    {position: 29, name: 'Andaman and Nicobar Island', number: '03192-232102, 234287' },
    {position: 30, name: 'Chandigarh', number: '0172-2752038, 2752031, 2704048' },
    {position: 31, name: 'Dadra Nagar Haveli, Daman and Diu', number: '104/ 1077, 0260-2642106, 2630304' },
    {position: 32, name: 'Delhi', number: '011-22307145' },
    {position: 33, name: 'Jammu and Kashmir', number: '0191-2549676, 2520982/ 0194-2440283, 2452052, 2457313' },
    {position: 34, name: 'Ladakh', number: '01982-256462, 257416, 258960' },
    {position: 35, name: 'Lakshadweep', number: '104/ 04896-263742' },
    {position: 36, name: 'Puducherry', number: '104/ 1070/ 1077/ 0413-2253407' },    
  ];
  displayedColumns: string[] = ['position', 'name', 'number'];
  // dataSource = this.data;
  
  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
