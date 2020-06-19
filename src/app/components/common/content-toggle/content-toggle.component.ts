import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'common-content-toggle',
  templateUrl: './content-toggle.component.html',
  styleUrls: ['./content-toggle.component.css']
})
export class ContentToggleComponent implements OnInit {

  constructor() { }

  show = true;

  ngOnInit() {}
}
