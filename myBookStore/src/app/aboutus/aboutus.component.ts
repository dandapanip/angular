import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mbs-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goTo() {
    console.log("goTo button clicked");
  }

}
