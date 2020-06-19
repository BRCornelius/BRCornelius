import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'common-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  @Input() allowLogin: boolean;
  @Input() text: string;

  ngOnInit() {
  }
}
