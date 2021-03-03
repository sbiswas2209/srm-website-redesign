import { Component, OnInit } from '@angular/core';
declare let $: any;
@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('#blogCarousel').carousel({
      interval: 5000
  });
  }

}
