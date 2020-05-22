import { Component, OnInit, Input } from '@angular/core';
import { OtfService } from 'src/app/services';
import { IOTFVideo, IKidsVideo } from 'src/app/utilities';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {

  constructor(private otf: OtfService) { }

  ngOnInit() {}

  @Input() videos: IOTFVideo[] | IKidsVideo[];
  @Input() activeVideoTitle: string;
  @Input() activeVideoUrl: string;

  setActiveVideo: Function = (event): void => {
    this.activeVideoTitle = event.target.title;
    this.activeVideoUrl = event.target.id;
  };
}