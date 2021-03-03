import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    $('#blogCarousel1').carousel({
      interval: 5000
  });

  }

}



